import { z } from "zod";


export const UserSchemaVerify = z.object({
    rol: z.string().min(1, "Rol is required"),
    email: z.string().email("Invalid email format"),
    name: z.string().min(1, "Name is required"),
});



export type UserTypeVerify = z.infer<typeof UserSchemaVerify>;
