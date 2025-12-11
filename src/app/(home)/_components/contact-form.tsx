"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { type ContactFormData, contactSchema } from "@/lib/schemas"
import { sendMessage } from "@/lib/services"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmitMessage(data: ContactFormData) {
    const toastId = toast.loading("Enviando mensagem...")
    setIsLoading(true)
    const response = await sendMessage(data)

    if (response.success) {
      toast.success("Mensagem enviada com sucesso!", { id: toastId })
      reset()
    } else {
      toast.error("Falha ao enviar mensagem!", { id: toastId })
    }

    setIsLoading(false)
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmitMessage)}>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="contact-name">Nome</FieldLabel>
                <Input
                  id="contact-name"
                  placeholder="Seu nome"
                  {...register("name")}
                />
                {errors.name && <FieldError>{errors.name.message}</FieldError>}
              </Field>

              <Field>
                <FieldLabel htmlFor="contact-mail">E-mail</FieldLabel>
                <Input
                  id="contact-mail"
                  placeholder="seu@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <FieldError>{errors.email.message}</FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="contact-message">Mensagem</FieldLabel>
                <Textarea id="contact-message" {...register("message")} />
                {errors.message && (
                  <FieldError>{errors.message.message}</FieldError>
                )}
              </Field>

              <Button disabled={isLoading} size="lg" type="submit">
                {isLoading ? "Enviando..." : "Enviar"}
              </Button>
            </FieldGroup>
          </FieldSet>
        </form>
      </CardContent>
    </Card>
  )
}
