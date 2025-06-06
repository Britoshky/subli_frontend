'use client';
import { useChatSocket } from "@/hooks/useChatSocket";
import { ChatInput } from "./ChatInput";
import { MessageItem } from "./MessageItem";

export const ChatBox = ({ numero }: { numero: string }) => {
  const { mensajes, enviarMensaje } = useChatSocket();

  const handleSend = (msg: string) => {
    enviarMensaje({
      numero,
      mensaje: msg,
      tipo: "texto",
      emisor: "admin",
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <div className="h-96 overflow-y-auto mb-4 space-y-2">
        {mensajes.map((m, i) => (
          <MessageItem key={i} mensaje={m} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};
