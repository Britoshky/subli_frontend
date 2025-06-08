import { Toaster } from "@/components/ui/sonner"

// app/auth/layout.tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="h-screen flex items-center justify-center bg-gray-50">
        {children}

        {/* Si quieres notificaciones solo en auth */}
        <div id="auth-toaster">
          {/* Puedes incluir el Toaster aquí si es necesario */}
                <Toaster toastOptions={{ className: "sonner-toast" }} />       

        </div>
      </body>
    </html>
  );
}
