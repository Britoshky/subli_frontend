"use client";

import { useRef, useState } from "react";
import type { Socket } from "socket.io-client";

interface Props {
  numero: string;
  socket: Socket;
}

export default function ChatInputForm({ numero, socket }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSending(true);

    const formData = new FormData(formRef.current!);
    const mensaje = formData.get("mensaje")?.toString().trim();

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

    formRef.current?.reset();
    setIsSending(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex gap-2 p-4 border-t bg-white">
      <input type="hidden" name="numero" value={numero} />
      <input
        name="mensaje"
        className="flex-1 border rounded px-3 py-2 text-sm"
        placeholder="Escribe un mensaje..."
        required
      />
      <button
        type="submit"
        disabled={isSending}
        className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
      >
        {isSending ? "Enviando..." : "Enviar"}
      </button>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </form>
  );
}
