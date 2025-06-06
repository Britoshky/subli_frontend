"use client";

import { useEffect, useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatMessages from "./ChatMessages";
import ChatInputForm from "./ChatInputForm";
import { Mensaje } from "@/src/schema/mensaje.schema";
import { socket } from "@/utils/socket";

interface ChatLayoutProps {
  mensajes: Mensaje[];
  adminNumero: string;
}

export default function ChatLayout({ mensajes: mensajesIniciales, adminNumero }: ChatLayoutProps) {
  const [numeroSeleccionado, setNumeroSeleccionado] = useState<string | null>(null);
  const [mensajes, setMensajes] = useState<Mensaje[]>(mensajesIniciales);

  // Agrupar mensajes por número
  const conversaciones = mensajes.reduce<Record<string, Mensaje[]>>((acc, msg) => {
    if (!acc[msg.numero]) acc[msg.numero] = [];
    acc[msg.numero].push(msg);
    return acc;
  }, {});

  // 🚀 Escucha en tiempo real
  useEffect(() => {
    socket.connect();

    socket.on("nuevo-mensaje", (nuevoMensaje: Mensaje) => {
      setMensajes((prev) => [...prev, nuevoMensaje]);
    });

    return () => {
      socket.disconnect();
      socket.off("nuevo-mensaje");
    };
  }, []);

  return (
    <div className="flex h-screen border-t">
      <ChatSidebar
        conversaciones={conversaciones}
        onSelect={setNumeroSeleccionado}
        numeroSeleccionado={numeroSeleccionado}
      />
      <div className="flex flex-col flex-1 bg-gray-50">
        <ChatMessages
          mensajes={numeroSeleccionado ? conversaciones[numeroSeleccionado] : []}
          adminNumero={adminNumero}
          numero={numeroSeleccionado}
        />
        {numeroSeleccionado && <ChatInputForm numero={numeroSeleccionado} />}
      </div>
    </div>
  );
}
