"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendMensaje } from "@/app/actions/send-mensaje-action";

export default function ChatInputForm({ numero }: { numero: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, dispatch, isPending] = useActionState(sendMensaje, {
    errors: [],
    success: "",
  });

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      noValidate
      action={dispatch}
      className="flex items-center gap-2 p-4 border-t bg-white"
    >
      <input type="hidden" name="numero" value={numero} />
      <input
        name="mensaje"
        className="flex-1 border rounded px-3 py-2 text-sm"
        placeholder="Escribe un mensaje..."
        required
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600"
      >
        {isPending ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
