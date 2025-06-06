import { cookies } from "next/headers";

export default async function getToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("subli_auth")?.value;
  return token;
}
