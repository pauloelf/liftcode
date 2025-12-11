import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
    .max(50, { message: "O nome não pode ultrapassar 50 caracteres" }),
  email: z.string().email({ message: "Digite um e-mail válido" }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" })
    .max(500, { message: "A mensagem não pode ultrapassar 500 caracteres" }),
})

export type ContactFormData = z.infer<typeof contactSchema>
