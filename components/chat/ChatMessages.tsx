import { Mensaje } from "@/src/schema/mensaje.schema";

interface ChatMessagesProps {
  mensajes: Mensaje[];
  numero: string | null;
  adminNumero: string;
}

export default function ChatMessages({
  mensajes,
  numero,
  adminNumero,
}: ChatMessagesProps) {
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
      {mensajes.map((msg) => {
        const esAdmin = msg.emisor === "admin";
        return (
          <div
            key={msg._id}
            className={`max-w-xs p-2 mb-2 rounded-lg text-sm ${
              esAdmin
                ? "bg-cyan-100 self-end text-right"
                : "bg-white border self-start"
            }`}
          >
            <div>{msg.mensaje}</div>
            {msg.timestamp ? (
              <div className="text-[10px] text-gray-400 mt-1">
                {new Date(msg.timestamp).toLocaleString()}
              </div>
            ) : null}
          </div>
        );
      })}
    </main>
  );
}
