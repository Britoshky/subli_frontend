"use server";

import getToken from "@/src/auth/token";
import { MensajeCreateSchema } from "@/src/schema/mensaje.schema";
import { ErrorResponseSchema } from "@/src/schema/shared/response.schema";
import { SuccessSchema } from "@/src/schema/shared/success.schema";

type ActionStateType = {
  errors: string[];
  success: string;
};

export async function sendMensaje(
  prevState: ActionStateType,
  formData: FormData
) {
  const mensajeNuevo = {
    numero: formData.get("numero")?.toString() || "",
    emisor: "admin", // <- explícitamente tú
    tipo: "text", // <-- requerido por el schema
    mensaje: formData.get("mensaje")?.toString() || "",
  };

  const msj = MensajeCreateSchema.safeParse(mensajeNuevo);
  if (!msj.success) {
    return {
      errors: msj.error.errors.map((issue) => issue.message),
      success: "",
    };
  }
  const url = `${process.env.API_URL}/mensajes`;
  const token = await getToken();
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      numero: msj.data.numero,
      mensaje: msj.data.mensaje,
      tipo: msj.data.tipo,
      emisor: "admin", // aquí lo fuerzas correctamente
    }),
  });
  const json = await req.json();
  if (!req.ok) {
    const { error } = ErrorResponseSchema.parse(json);
    return {
      errors: [error],
      success: "",
    };
  }
  // Si todo sale bien, retornamos un mensaje de éxito
  console.log("Mensaje enviado:", json);
  const success = SuccessSchema.parse(json);
  return {
    errors: [],
    success,
  };
}
