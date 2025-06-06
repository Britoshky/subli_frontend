import { Mensaje } from "@/types/mensaje";

export const MessageItem = ({ mensaje }: { mensaje: Mensaje }) => {
  return (
    <div className={`mb-2 ${mensaje.emisor === "admin" ? "text-right" : "text-left"}`}>
      <div className="inline-block bg-gray-200 p-2 rounded-xl">
        {mensaje.tipo === "texto" && <span>{mensaje.mensaje}</span>}
        {mensaje.tipo === "imagen" && <img src={mensaje.mediaUrl} alt="img" className="w-32" />}
        {mensaje.tipo === "audio" && (
          <audio controls src={mensaje.mediaUrl} className="w-full" />
        )}
      </div>
    </div>
  );
};
