"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { loginClient } from "@/hooks/login-client";
import { motion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react"; // ícono de carga
import { authenticate } from "@/app/actions/authenticate-user-action";
import { LoginFormData, LoginFormSchema } from "@/src/schema/login.schema";


export function LoginForm({ className, ...props }: HTMLMotionProps<"form">) {
  const [state, dispatch] = useActionState(authenticate, { errors: [] });
  const [isPending, startTransition] = useTransition();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shake, setShake] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
  });

  

  useEffect(() => {
    if (state.errors?.length) {
      state.errors.forEach((error) => toast.error(error));
      setIsSubmitting(false);

      // Activar sacudida visual
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else if (state.userId) {
      loginClient(state.userId).then(() => {
        window.location.href = "/auth";
      });
    }
  }, [state]);

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    startTransition(() => {
      dispatch(formData);
    });
  };

  const hasUsernameError = state.errors?.some(
    (e) =>
      e.toLowerCase().includes("cuenta") || e.toLowerCase().includes("email")
  );

  const hasPasswordError = state.errors?.some(
    (e) =>
      e.toLowerCase().includes("contraseña") ||
      e.toLowerCase().includes("password")
  );

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("flex flex-col gap-6", shake && "shake", className)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Inicia sesión
        </h1>
        <p className="text-white/50 text-sm">Ingresa tu usuario y contraseña</p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email" className="text-white/70">
            Correo
          </Label>
          <Input
            id="email"
            type="text"
            {...register("email")}
            className={cn(
              "bg-[#0d0d15] text-white border placeholder-white/30 transition shadow-inner shadow-cyan-800/10",
              errors.email || hasUsernameError
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-500"
            )}
          />

          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-white/70">
              Contraseña
            </Label>
            <a
              href="#"
              className="ml-auto text-sm text-cyan-400 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className={cn(
                "bg-[#0d0d15] text-white border placeholder-white/30 transition shadow-inner shadow-cyan-800/10 pr-20",
                errors.password || hasPasswordError
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-500"
              )}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-cyan-400 hover:underline"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember" className="accent-cyan-500" />
          <label htmlFor="remember" className="text-white/70 text-sm">
            Recordarme
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 transition flex items-center justify-center gap-2"
          disabled={isPending || isSubmitting}
        >
          {(isPending || isSubmitting) && (
            <Loader2 className="animate-spin w-4 h-4" />
          )}
          {isSubmitting ? "Ingresando..." : "Login"}
        </Button>
      </div>
    </motion.form>
  );
}
