import { cache } from "react";
// import getToken from "../auth/token";
import { notFound } from "next/navigation";
import { MensajeListSchema } from "../schema/mensaje.schema";


export const getAllMensajes = cache(async () => {
  // const token = getToken();
  const url = `${process.env.API_URL}/mensajes`;
  const req = await fetch(url, {
    method: "GET",
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
    next: {
      tags: ["all-messages"], // Para ISR o caché
    },
  });

  const json = await req.json();
  const mensajes = MensajeListSchema.parse(json);


  return mensajes;
});

