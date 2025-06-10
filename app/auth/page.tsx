// app/auth/page.tsx
import { verifySession } from "@/src/auth/dal";
import { redirect } from "next/navigation";

export default async function AuthRedirectPage() {

  const session = await verifySession();
  if (!session) {
    redirect("/auth/login");
  }

  if (session.user.rol === "operador") {
    redirect("/auth/admin/dashboard");
  } else if (session.user.rol === "admin") {
    redirect("/auth/user/dashboard");
  }

  return null;
}
