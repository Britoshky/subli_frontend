"use client";
import { useEffect, useState } from "react";
import { socket } from "../utils/socket";
import { Mensaje } from "../types/mensaje";

export const useChatSocket = () => {
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);

  useEffect(() => {
    socket.on("nuevo-mensaje", (mensaje: Mensaje) => {
      setMensajes((prev) => [...prev, mensaje]);
    });

    return () => {
      socket.off("nuevo-mensaje");
    };
  }, []);

  const enviarMensaje = (mensaje: Omit<Mensaje, "timestamp">) => {
    socket.emit("enviar-mensaje", mensaje);
  };

  return { mensajes, enviarMensaje };
};
