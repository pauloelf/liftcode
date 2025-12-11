import emailjs from "@emailjs/browser"
import type { ContactFormData } from "./schemas"

export async function sendMessage(data: ContactFormData) {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      process.env.NEXT_PUBLIC_KEY_ID,
    )
    return { success: true, result }
  } catch (error) {
    console.error("Ocorreu um erro ~", error)
    return { success: false, error }
  }
}
