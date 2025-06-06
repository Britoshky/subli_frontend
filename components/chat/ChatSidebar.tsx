import { Mensaje } from "@/src/schema/mensaje.schema";

interface ChatSidebarProps {
  conversaciones: Record<string, Mensaje[]>;
  onSelect: (numero: string) => void;
  numeroSeleccionado: string | null;
}

export default function ChatSidebar({
  conversaciones,
  onSelect,
  numeroSeleccionado,
}: ChatSidebarProps) {
  return (
    <aside className="w-1/3 border-r bg-white overflow-y-auto">
      {Object.entries(conversaciones).map(([numero, msgs]) => {
        const ultimoMensaje = msgs[msgs.length - 1];
        return (
          <div
            key={numero}
            onClick={() => onSelect(numero)}
            className={`cursor-pointer p-4 border-b hover:bg-gray-100 ${
              numero === numeroSeleccionado ? "bg-gray-100 font-semibold" : ""
            }`}
          >
            <div className="text-sm text-gray-800">{numero}</div>
            <div className="text-xs text-gray-500 truncate">{ultimoMensaje.mensaje}</div>
          </div>
        );
      })}
    </aside>
  );
}
