// Data Acces Layer
import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import getToken from "./token";
import { UserSchemaVerify } from "../schema/user/user.schema";

export const verifySession = cache(async () => {
  const token = await getToken();
  if (!token) redirect("/auth/login");
  const url = `${process.env.API_URL}/auth/login`;
  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  if (!req.ok) redirect("/auth/login");

  const data = await req.json();

  const parsedData = UserSchemaVerify.safeParse(data);
  if (!parsedData.success) redirect("/auth/login");

  return {
    user: parsedData.data,
  };
});
