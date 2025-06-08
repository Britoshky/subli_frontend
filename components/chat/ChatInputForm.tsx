"use client";

import { useRef, useState, useTransition } from "react";
import type { Socket } from "socket.io-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Paperclip, Send, X } from "lucide-react";
import { toast } from "sonner";
import { sendImageAction } from "@/app/actions/send-image-action";

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
  const [_, startTransition] = useTransition();

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
      className="flex flex-col sm:flex-row gap-2 p-4 border-t bg-white items-end"
      encType="multipart/form-data"
    >
      <div className="flex-1 flex flex-col gap-1">
        <Label htmlFor="mensaje" className="text-xs text-gray-500">
          Escribe un mensaje
        </Label>
        <Input
          name="mensaje"
          id="mensaje"
          placeholder="Escribe algo o adjunta una imagen..."
          className="text-sm"
        />
        {previewUrl && (
          <div className="mt-2 relative w-fit">
            <img
              src={previewUrl}
              alt="Preview"
              className="max-w-xs rounded-md border"
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

      <div className="flex flex-col items-center justify-end gap-1">
        <Label htmlFor="archivo" className="text-xs text-gray-500 cursor-pointer">
          <Paperclip className="w-4 h-4 inline-block mr-1" />
          Adjuntar
        </Label>
        <Input
          type="file"
          name="archivo"
          id="archivo"
          accept="image/*"
          onChange={handleFileChange}
          className="w-[180px] text-xs"
        />
      </div>

      <Button
        type="submit"
        disabled={isSending}
        className="flex gap-1 items-center"
      >
        {isSending ? (
          "Enviando..."
        ) : (
          <>
            <Send className="w-4 h-4" /> Enviar
          </>
        )}
      </Button>

      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </form>
  );
}
