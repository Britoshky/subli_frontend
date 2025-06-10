"use client";

import { useCallback, useEffect, useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatMessages from "./ChatMessages";
import ChatInputForm from "./ChatInputForm";
import { Mensaje } from "@/src/schema/mensaje.schema";
import { useSocket } from "@/hooks/useChatSocket";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [hayNotificacion, setHayNotificacion] = useState(false);

  const socket = useSocket(token, (nuevoMensaje) => {
    setMensajes((prev) => {
      const yaExiste = prev.some((msg) => msg._id === nuevoMensaje._id);
      if (yaExiste) return prev;

      if (
        typeof window !== "undefined" &&
        window.innerWidth < 640 &&
        nuevoMensaje.emisor === "user" &&
        nuevoMensaje.numero !== numeroSeleccionado
      ) {
        setHayNotificacion(true);
      }

      return [...prev, nuevoMensaje];
    });
  });

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

  const recargarHistorial = useCallback(
    (numero: string) => {
      socket?.emit("obtener-historial", numero);
    },
    [socket]
  );

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
      socket.emit("marcar-como-leido", numeroSeleccionado);
      setMensajes((prev) =>
        prev.map((m) =>
          m.numero === numeroSeleccionado && m.emisor === "user"
            ? { ...m, leido: true }
            : m
        )
      );
      recargarHistorial(numeroSeleccionado);
    }
  }, [numeroSeleccionado, socket, recargarHistorial]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <div className="flex flex-col h-[100dvh] relative overflow-hidden">
      {!numeroSeleccionado && (
        <Button
          variant="ghost"
          onClick={() => {
            setSidebarVisible(true);
            setHayNotificacion(false);
          }}
          className="absolute top-2 left-2 z-50 sm:hidden"
          size="icon"
        >
          <Menu className="w-5 h-5" />
          {hayNotificacion && (
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 animate-ping" />
          )}
        </Button>
      )}

      {/* Pantalla de lista de chats en móviles */}
      {(!numeroSeleccionado || sidebarVisible || !isMobile) && (
        <aside
          className={`fixed sm:static top-0 left-0 z-50 h-full w-full sm:w-72 bg-white border-r transition-transform duration-300 ${
            sidebarVisible
              ? "translate-x-0"
              : "-translate-x-full sm:translate-x-0"
          }`}
        >
          <ChatSidebar
            conversaciones={conversaciones}
            onSelect={(numero) => {
              setNumeroSeleccionado(numero);
              if (isMobile) setSidebarVisible(false);
            }}
            numeroSeleccionado={numeroSeleccionado}
            mensajesNoLeidos={mensajesNoLeidos}
          />
        </aside>
      )}

      {/* Chat principal */}
      <div className="flex flex-col flex-1 bg-gray-50 overflow-hidden">
        <ChatMessages
          mensajes={
            numeroSeleccionado ? conversaciones[numeroSeleccionado] : []
          }
          adminNumero={adminNumero}
          numero={numeroSeleccionado}
          onBack={() => {
            setNumeroSeleccionado(null);
            setSidebarVisible(true);
          }}
        />
        {numeroSeleccionado && socket && (
          <ChatInputForm numero={numeroSeleccionado} socket={socket} />
        )}
      </div>
    </div>
  );
}
