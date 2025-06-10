import { LoginForm } from "@/components/login/LoginForm";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
                {/* Fondo tipo videojuego */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gradient-to-br from-black via-[#0f0f1a]/80 to-[#0f0f1a]/90 overflow-hidden">
                    <Image
                        src="/login/bg-login.png"
                        alt="Login background"
                        fill
                        className="object-cover blur-sm"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0f1a]/80 to-[#0f0f1a]/90 opacity-20 backdrop-blur-md" />
                </div>

                {/* Formulario */}
                <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 w-full max-w-md shadow-2xl backdrop-blur-lg">
                    <div className="flex items-center gap-2 justify-center mb-6">
                        <div className="bg-cyan-500 text-black flex size-8 items-center justify-center rounded-md shadow-md">
                            <GalleryVerticalEnd className="w-4 h-4" />
                        </div>
                        <span className="text-white text-xl font-bold tracking-wide">
                            MU Black Star
                        </span>
                    </div>

                    <LoginForm />
                </div>
            </div>
        </>
    );
}
