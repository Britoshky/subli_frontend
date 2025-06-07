"use client";
import { Mensaje } from "@/src/schema/mensaje.schema";

interface ChatSidebarProps {
  conversaciones: Record<string, Mensaje[]>;
  onSelect: (numero: string) => void;
  numeroSeleccionado: string | null;
  mensajesNoLeidos: Record<string, number>; // Nuevo
}

export default function ChatSidebar({
  conversaciones,
  onSelect,
  numeroSeleccionado,
  mensajesNoLeidos,
}: ChatSidebarProps) {
  return (
    <aside className="w-1/3 border-r bg-white overflow-y-auto">
      {Object.entries(conversaciones)
        .sort((a, b) => {
          const ultimaA = a[1][a[1].length - 1]?.timestamp || "";
          const ultimaB = b[1][b[1].length - 1]?.timestamp || "";
          return new Date(ultimaB).getTime() - new Date(ultimaA).getTime();
        })
        .map(([numero, msgs]) => {
          const ultimoMensaje = msgs[msgs.length - 1];
          const cantidadNoLeidos = mensajesNoLeidos[numero] || 0;

          return (
            <div
              key={numero}
              onClick={() => onSelect(numero)}
              className={`cursor-pointer p-4 border-b hover:bg-gray-100 relative ${
                numero === numeroSeleccionado ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-800">{numero}</span>

                {cantidadNoLeidos > 0 && numero !== numeroSeleccionado && (
                  <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                    {cantidadNoLeidos}
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {ultimoMensaje.mensaje}
              </div>
            </div>
          );
        })}
    </aside>
  );
}
