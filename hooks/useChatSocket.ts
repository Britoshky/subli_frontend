"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Mensaje } from "@/src/schema/mensaje.schema";

export function useSocket(token: string, onNuevoMensaje: (msg: Mensaje) => void) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = io("wss://ws.subli.cl", {
      transports: ["websocket"],
      auth: { token },
    });

    socketInstance.on("connect", () => {
      console.log("✅ Socket conectado:", socketInstance.id);
    });

    // ✅ Escuchar mensaje solo 1 vez al montar
    socketInstance.on("nuevo-mensaje", onNuevoMensaje);

    socketInstance.on("connect_error", (err) => {
      console.error("❌ Error de conexión:", err.message);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
      socketInstance.off("nuevo-mensaje", onNuevoMensaje); // Limpieza explícita
    };
    // ⛔️ No incluir onNuevoMensaje para evitar bucles infinitos
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return socket;
}
