"use client";

import { useEffect, useRef, useState } from "react";
import { Mensaje } from "@/src/schema/mensaje.schema";
import { ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  mensajes: Mensaje[];
  numero: string | null;
  adminNumero: string;
  onBack?: () => void;
}

export default function ChatMessages({ mensajes, numero, onBack }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [imagenAmpliada, setImagenAmpliada] = useState<string | null>(null);

  const mensajesOrdenados = [...mensajes].sort(
    (a, b) =>
      new Date(a.timestamp ?? "").getTime() -
      new Date(b.timestamp ?? "").getTime()
  );

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [mensajes, numero]);

  if (!numero) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50 text-gray-400">
        Selecciona una conversación
      </div>
    );
  }

  return (
    <>
      <main className="flex-1 flex flex-col bg-gray-50 p-4 overflow-y-auto">
        {/* Encabezado móvil */}
        <div className="sm:hidden flex items-center gap-2 mb-4 px-1">
          {onBack && (
            <button
              onClick={onBack}
              className="text-cyan-600 hover:text-cyan-800"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <span className="text-sm font-semibold text-gray-700 truncate">
            Conversación con {numero}
          </span>
        </div>

        {/* Mensajes */}
        {mensajesOrdenados.map((msg) => {
          const esAdmin = msg.emisor === "admin";
          const imagenUrl = msg.mediaUrl
            ?.replace("C:\\subli\\subli-frontend\\public", "https://subli.cl")
            .replace(/\\/g, "/");

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
                  <div className="flex items-center gap-3 rounded-full bg-white border px-3 py-2 max-w-[520px] shadow-sm">
                    <audio
                      controls
                      className="w-screen"
                      style={{ outline: "none", borderRadius: "10px" }}
                    >
                      <source
                        src={imagenUrl}
                        type={msg.mediaMimeType || "audio/ogg"}
                      />
                      Tu navegador no soporta audio.
                    </audio>
                  </div>
                ) : msg.tipo === "image" && imagenUrl ? (
                  <img
                    src={imagenUrl}
                    alt="imagen enviada"
                    className="max-w-full rounded-md cursor-pointer hover:opacity-90 transition"
                    onClick={() => setImagenAmpliada(imagenUrl)}
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

      {/* 🖼 Modal de imagen ampliada */}
      <AnimatePresence>
        {imagenAmpliada && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImagenAmpliada(null)}
          >
            <motion.img
              src={imagenAmpliada}
              alt="imagen ampliada"
              className="max-w-full max-h-full rounded-lg shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setImagenAmpliada(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
