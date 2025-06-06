import { z } from "zod";

export const LoginFormSchema = z.object({
  correo: z
    .string()
    .email("Debes ingresar un correo válido")
    .min(5, "El correo es obligatorio"),
  contrasena: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(100, "La contraseña es demasiado larga"),
});

export type LoginFormData = z.infer<typeof LoginFormSchema>;
