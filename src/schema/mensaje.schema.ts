import { z } from "zod";

// 📩 Schema de un solo mensaje adaptado al backend real
export const MensajeSchema = z.object({
  _id: z.string().optional(), // MongoDB _id
  nombre: z.string().optional(), // Nombre del usuario, opcional
  numero: z
    .string()
    .min(8, "El número debe tener al menos 8 caracteres")
    .max(15, "El número no debe exceder los 15 caracteres"),
  mensaje: z
    .string()
    .nullable(),
  tipo: z.enum(["text", "image", "audio"], {
    errorMap: () => ({
      message: "El tipo debe ser 'text', 'image' o 'audio'",
    }),
  }),
  emisor: z.string().optional(),
  mediaUrl: z.string().nullable().optional(), // 👈 agrega esta línea
  mediaMimeType: z.string().nullable().optional(),
  timestamp: z.string().datetime().optional(),
  __v: z.number().optional(),
  leido: z.boolean().optional(), // ✅ Agregado aquí
});

// 🗃️ Lista de mensajes
export const MensajeListSchema = z.array(MensajeSchema); // sin restricción mínima

// 📝 Schema para crear mensaje (cliente → servidor)
export const MensajeCreateSchema = MensajeSchema.omit({
  _id: true,
  __v: true,
  timestamp: true,
  emisor: true,
});

// ✅ Tipos exportables
export type Mensaje = z.infer<typeof MensajeSchema>;
export type MensajeCreate = z.infer<typeof MensajeCreateSchema>;
export type MensajeList = z.infer<typeof MensajeListSchema>;
