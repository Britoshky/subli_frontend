"use server";
import { LoginFormSchema } from "@/src/schema/login.schema";
import { ErrorResponseSchema } from "@/src/schema/shared/response.schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ActionStateType = {
  errors: string[];
};

export async function authenticate(
  prevState: ActionStateType,
  formdata: FormData
) {
  console.log(formdata)
  
  return {
    errors: [],
  }
}
