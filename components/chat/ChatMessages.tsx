"use client";
import { useEffect, useRef } from "react";
import { Mensaje } from "@/src/schema/mensaje.schema";

interface Props {
  mensajes: Mensaje[];
  numero: string | null;
  adminNumero: string;
}

export default function ChatMessages({ mensajes, numero }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const mensajesOrdenados = [...mensajes].sort(
    (a, b) =>
      new Date(a.timestamp ?? "").getTime() - new Date(b.timestamp ?? "").getTime()
  );

  useEffect(() => {
    // Scroll automático siempre que cambien los mensajes
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes, numero]); // 👈 se agrega `numero` para que funcione al cambiar de conversación

  if (!numero) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50 text-gray-400">
        Selecciona una conversación
      </div>
    );
  }

  return (
    <main className="flex-1 flex flex-col bg-gray-50 p-4 overflow-y-auto">
      <div className="text-center text-gray-500 mb-4">
        Conversación con {numero}
      </div>

      {mensajesOrdenados.map((msg) => {
        const esAdmin = msg.emisor === "admin";
        return (
          <div
            key={`${msg._id}-${msg.timestamp}`}
            className={`max-w-xs p-2 mb-2 rounded-lg text-sm ${
              esAdmin
                ? "bg-cyan-100 self-end text-right"
                : "bg-white border self-start"
            }`}
          >
            <div>
              {msg.tipo === "audio" && msg.mediaUrl ? (
                <audio controls>
                  <source
                    src={msg.mediaUrl
                      .replace("C:\\subli\\subli-frontend\\public", "https://subli.cl")
                      .replace(/\\/g, "/")}
                    type={msg.mediaMimeType || "audio/ogg"}
                  />
                  Tu navegador no soporta la reproducción de audio.
                </audio>
              ) : msg.tipo === "image" && msg.mediaUrl ? (
                <img
                  src={msg.mediaUrl
                    .replace("C:\\subli\\subli-frontend\\public", "https://subli.cl")
                    .replace(/\\/g, "/")}
                  alt="imagen enviada"
                  className="max-w-full rounded-md"
                />
              ) : (
                msg.mensaje
              )}
            </div>

            {msg.timestamp && (
              <div className="text-[10px] text-gray-400 mt-1">
                {new Date(msg.timestamp).toLocaleString("es-CL")}
              </div>
            )}
          </div>
        );
      })}

      <div ref={scrollRef} />
    </main>
  );
}
