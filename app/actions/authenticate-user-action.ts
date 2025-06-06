// src/app/actions/login-account-action.ts

"use server";
import { LoginFormSchema } from "@/src/schema/login.schema";
import { ErrorResponseSchema } from "@/src/schema/shared/response.schema";
import { cookies } from "next/headers";

type ActionStateType = {
  errors: string[];
  userId?: string; // 👈 nuevo
};

export async function authenticate(
  prevState: ActionStateType,
  formdata: FormData
) {
  const loginCredentials = {
    email: formdata.get("email")?.toString() || "",
    password: formdata.get("password")?.toString() || "",
  };

  const auth = LoginFormSchema.safeParse(loginCredentials);

  if (!auth.success) {
    return {
      errors: auth.error.errors.map((issue) => issue.message),
    };
  }


  const url = `${process.env.API_URL}/auth/login`;
  const req = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: auth.data.email,
      password: auth.data.password,
    }),
  });

  const json = await req.json();

  if (!req.ok) {
    const { error } = ErrorResponseSchema.parse(json);
    return { errors: [error] };
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: "subli_auth",
    value: json,
    httpOnly: true,
    path: "/",
  });


  return { errors: [], userId: auth.data.email };
}
