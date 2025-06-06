import { Toaster } from "@/components/ui/sonner"

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <div>{children}</div>

      <Toaster toastOptions={{ className: "sonner-toast" }} />       
    </>
  );
}
