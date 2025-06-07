"use client";

import { useEffect, useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatMessages from "./ChatMessages";
import ChatInputForm from "./ChatInputForm";
import { Mensaje } from "@/src/schema/mensaje.schema";
import { useSocket } from "@/hooks/useChatSocket";

interface Props {
  mensajes: Mensaje[];
  adminNumero: string;
  token: string;
}

export default function ChatLayout({
  mensajes: mensajesIniciales,
  adminNumero,
  token,
}: Props) {
  const [mensajes, setMensajes] = useState<Mensaje[]>(mensajesIniciales);
  const [numeroSeleccionado, setNumeroSeleccionado] = useState<string | null>(
    null
  );

  const socket = useSocket(token, (nuevoMensaje) => {
    setMensajes((prev) => {
      const yaExiste = prev.some((msg) => msg._id === nuevoMensaje._id);
      if (yaExiste) return prev;

      // Inserta al final sin afectar el orden de otros chats
      return [...prev, nuevoMensaje];
    });
  });

  // ✅ Escuchar una vez para historial y limpiar después
  useEffect(() => {
    if (!socket) return;

    const manejarHistorial = (mensajesActualizados: Mensaje[]) => {
      const numero = mensajesActualizados[0]?.numero;
      if (!numero) return;
      setMensajes((prev) => {
        const sinEseNumero = prev.filter((m) => m.numero !== numero);
        return [...sinEseNumero, ...mensajesActualizados];
      });
    };

    socket.on("historial-mensajes", manejarHistorial);
    return () => {
      socket.off("historial-mensajes", manejarHistorial);
    };
  }, [socket]);

  const recargarHistorial = (numero: string) => {
    socket?.emit("obtener-historial", numero);
  };

  const conversaciones = mensajes.reduce<Record<string, Mensaje[]>>(
    (acc, msg) => {
      if (!msg.numero) return acc;
      if (!acc[msg.numero]) acc[msg.numero] = [];
      acc[msg.numero].push(msg);
      return acc;
    },
    {}
  );

  const mensajesNoLeidos: Record<string, number> = {};
  for (const numero in conversaciones) {
    mensajesNoLeidos[numero] = conversaciones[numero].filter(
      (m) => m.emisor === "user" && !m.leido
    ).length;
  }

  useEffect(() => {
    if (numeroSeleccionado && socket) {
      // 1. Marcar como leído en Mongo
      socket.emit("marcar-como-leido", numeroSeleccionado);

      // 2. Marcar como leído localmente
      setMensajes((prev) =>
        prev.map((m) =>
          m.numero === numeroSeleccionado && m.emisor === "user"
            ? { ...m, leido: true }
            : m
        )
      );
      console.log("✅ Chat seleccionado:", numeroSeleccionado);

      // 3. Refrescar desde Mongo (por si hay diferencias)
      recargarHistorial(numeroSeleccionado);
    }
  }, [numeroSeleccionado, socket]);

  return (
    <div className="flex h-screen border-t">
      <ChatSidebar
        conversaciones={conversaciones}
        onSelect={setNumeroSeleccionado}
        numeroSeleccionado={numeroSeleccionado}
        mensajesNoLeidos={mensajesNoLeidos}
      />
      <div className="flex flex-col flex-1 bg-gray-50">
        <ChatMessages
          mensajes={
            numeroSeleccionado ? conversaciones[numeroSeleccionado] : []
          }
          adminNumero={adminNumero}
          numero={numeroSeleccionado}
        />
        {numeroSeleccionado && socket && (
          <ChatInputForm numero={numeroSeleccionado} socket={socket} />
        )}
      </div>
    </div>
  );
}
