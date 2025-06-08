// src/app/actions/send-image-action.ts
"use server";

import getToken from "@/src/auth/token";
import { ErrorResponseSchema } from "@/src/schema/shared/response.schema";
import { SuccessSchema } from "@/src/schema/shared/success.schema";

export type SendImageActionState = {
  errors: string[];
  success: string;
};

export async function sendImageAction(
  prevState: SendImageActionState,
  formData: FormData
): Promise<SendImageActionState> {
  const numero = formData.get("numero")?.toString();
  const archivo = formData.get("archivo") as File;

  if (!numero || !archivo) {
    return {
      errors: ["Falta el número o el archivo"],
      success: "",
    };
  }

  const buffer = await archivo.arrayBuffer();
  const blob = new Blob([buffer], { type: archivo.type });

  const uploadFormData = new FormData();
  uploadFormData.append("numero", numero);
  uploadFormData.append("archivo", blob, archivo.name);

  const token = await getToken();

  const res = await fetch(`${process.env.API_URL}/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: uploadFormData,
  });

  const json = await res.json();

  console.log("Response from upload:", json);
  if (!res.ok) {
    const { error } = ErrorResponseSchema.parse(json);
    return { errors: [error], success: "" };
  }

  const  success  = SuccessSchema.parse(json);
  return { errors: [], success };
}
