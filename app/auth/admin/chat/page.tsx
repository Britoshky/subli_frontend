import ChatLayout from "@/components/chat/ChatLayout";
import { getAllMensajes } from "@/src/services/Mensajes";

export default async function ChatPage() {
  const mensajes = await getAllMensajes();
  return <ChatLayout mensajes={mensajes} adminNumero="56956197415" />;
}
