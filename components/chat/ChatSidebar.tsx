"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Mensaje } from "@/src/schema/mensaje.schema";
import { MessageCircle } from "lucide-react";

interface ChatSidebarProps {
  conversaciones: Record<string, Mensaje[]>;
  onSelect: (numero: string) => void;
  numeroSeleccionado: string | null;
  mensajesNoLeidos: Record<string, number>;
}

export default function ChatSidebar({
  conversaciones,
  onSelect,
  numeroSeleccionado,
  mensajesNoLeidos,
}: ChatSidebarProps) {
  const [busqueda, setBusqueda] = useState("");

  const conversacionesOrdenadas = Object.entries(conversaciones)
    .sort((a, b) => {
      const ultimaA = a[1].at(-1)?.timestamp ?? "";
      const ultimaB = b[1].at(-1)?.timestamp ?? "";
      return new Date(ultimaB).getTime() - new Date(ultimaA).getTime();
    })
    .filter(([numero]) =>
      numero.toLowerCase().includes(busqueda.trim().toLowerCase())
    );

  return (
    <div className="flex flex-col h-full bg-white sm:w-72 w-full">
      <div className="p-3 border-b">
        <Input
          type="text"
          placeholder="Buscar número..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="text-sm"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversacionesOrdenadas.length === 0 ? (
          <div className="text-center text-sm text-gray-400 mt-4">
            No hay conversaciones
          </div>
        ) : (
          conversacionesOrdenadas.map(([numero, msgs]) => {
            const ultimoMensaje = msgs.at(-1);
            const cantidadNoLeidos = mensajesNoLeidos[numero] || 0;
            const activo = numero === numeroSeleccionado;

            let vistaPrevia = "";
            if (ultimoMensaje?.tipo === "text") {
              vistaPrevia = ultimoMensaje.mensaje ?? "";
            } else if (ultimoMensaje?.tipo === "image") {
              vistaPrevia = "📷 Imagen enviada";
            } else if (ultimoMensaje?.tipo === "audio") {
              vistaPrevia = "🎤 Audio enviado";
            }

            return (
              <div
                key={numero}
                role="button"
                tabIndex={0}
                onClick={() => onSelect(numero)}
                onKeyDown={(e) => e.key === "Enter" && onSelect(numero)}
                className={`cursor-pointer px-4 py-3 border-b transition-colors select-none ${
                  activo ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span
                    className="text-sm font-medium text-gray-800 truncate"
                    title={`+${numero}`}
                  >
                    <MessageCircle className="inline w-4 h-4 mr-1 text-cyan-500" />
                    {numero}
                  </span>

                  {cantidadNoLeidos > 0 && !activo && (
                    <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                      {cantidadNoLeidos}
                    </span>
                  )}
                </div>

                <div className="text-xs text-gray-500 truncate mt-1">
                  {vistaPrevia}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
