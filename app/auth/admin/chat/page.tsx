import { ChatBox } from "@/components/chat/ChatBox";
import { getAllMensajes } from "@/src/services/Mensajes";

export default async function ChatPage() {
  const numero = "56956197415"; // este puedes manejarlo dinámico desde login o props
// const mensajes = await getAllMensajes();
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-center text-2xl font-bold mt-6">Chat con Clientes</h1>
      <ChatBox numero={numero} />
    </div>
  );
}

