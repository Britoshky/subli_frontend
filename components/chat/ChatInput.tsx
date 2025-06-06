"use client";
import { useState } from "react";

export const ChatInput = ({ onSend }: { onSend: (msg: string) => void }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border rounded px-4 py-2"
        placeholder="Escribe un mensaje..."
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Enviar
      </button>
    </div>
  );
};
