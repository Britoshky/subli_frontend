"use client";

import { useRef, useState, useTransition } from "react";
import type { Socket } from "socket.io-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Paperclip, Send, X } from "lucide-react";
import { toast } from "sonner";
import { sendImageAction } from "@/app/actions/send-image-action";
import Image from "next/image";

interface Props {
  numero: string;
  socket: Socket;
}

type SendImageActionResponse = {
  success?: string;
  errors?: string[];
};

export default function ChatInputForm({ numero, socket }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [, startTransition] = useTransition();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSending(true);

    const form = formRef.current!;
    const mensaje = form.mensaje.value.trim();
    const archivo = (
      form.querySelector('input[name="archivo"]') as HTMLInputElement
    )?.files?.[0];

    if (archivo) {
      const formData = new FormData();
      formData.append("numero", numero);
      formData.append("archivo", archivo);

      startTransition(() => {
        sendImageAction({ errors: [], success: "" }, formData).then(
          (res: SendImageActionResponse) => {
            if (res.errors?.length) {
              res.errors.forEach((err) => toast.error(err));
              setError("Error al subir imagen");
            } else if (res.success) {
              toast.success("📸 Imagen subida correctamente");
              socket.emit("enviar-mensaje", {
                numero,
                mensaje: mensaje || null,
                emisor: "admin",
                tipo: "image",
                mediaUrl: res.success,
                mediaMimeType: archivo.type,
              });
              setPreviewUrl(null);
            }
            setIsSending(false);
          }
        );
      });
    } else {
      if (!mensaje) {
        setError("El mensaje no puede estar vacío");
        setIsSending(false);
        return;
      }

      socket.emit("enviar-mensaje", {
        numero,
        mensaje,
        emisor: "admin",
        tipo: "text",
      });

      toast.success("💬 Mensaje enviado");
      setIsSending(false);
    }

    form.reset();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="sticky bottom-0 left-0 right-0 z-30 bg-white border-t px-4 py-2 flex flex-col gap-2 sm:flex-row items-end"
      encType="multipart/form-data"
    >
      <div className="flex-1 flex flex-col gap-1 w-full">
        <textarea
          name="mensaje"
          placeholder="Escribe algo o adjunta una imagen..."
          className="w-full rounded-md border px-3 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-cyan-500"
          rows={2}
        />

        {previewUrl && (
          <div className="relative w-fit mt-2">
            <Image
              src={previewUrl}
              alt="Preview"
              width={300}
              height={300}
              className="rounded-md border max-w-xs"
            />
            <button
              onClick={() => setPreviewUrl(null)}
              type="button"
              className="absolute top-1 right-1 bg-white rounded-full shadow p-1"
            >
              <X className="w-4 h-4 text-red-500" />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-1 sm:ml-2">
        <label htmlFor="archivo" className="cursor-pointer text-xs text-gray-600 hover:text-cyan-700">
          <Paperclip className="w-5 h-5" />
        </label>
        <Input
          type="file"
          id="archivo"
          name="archivo"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <Button
          type="submit"
          disabled={isSending}
          className="flex items-center gap-1"
        >
          {isSending ? "Enviando..." : <><Send className="w-4 h-4" />Enviar</>}
        </Button>
      </div>

      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </form>
  );
}
