import ChatLayout from "@/components/chat/ChatLayout";
import getToken from "@/src/auth/token";
import { getAllMensajes } from "@/src/services/Mensajes";
import { redirect } from "next/navigation"; // ✅ usa el de app router

export default async function ChatPage() {
  const token = await getToken();
  if (!token) redirect("/auth/login");

  const mensajes = await getAllMensajes();

  return (
    <ChatLayout
      mensajes={mensajes}
      adminNumero="56956197415"
      token={token}
    />
  );
}
