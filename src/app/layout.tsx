import type { Metadata } from "next"
import { Nunito_Sans, Open_Sans, Prompt } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
})

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
})

export const metadata: Metadata = {
  title: "LiftCode | Portfólio de Front-End",
  description:
    "Explore o portfólio de Paulo: soluções modernas em front-end, UI/UX e tecnologia para experiências únicas.",
  keywords: ["portfólio", "front-end", "UI/UX", "desenvolvedor web", "Recife"],
  authors: [{ name: "Paulo Sérgio" }],
  openGraph: {
    title: "LiftCode | Portfólio de Front-End",
    description:
      "Explore o portfólio de Paulo: soluções modernas em front-end, UI/UX e tecnologia para experiências únicas.",
    siteName: "Paulo Portfólio",
    url: "http://liftcode-paulodev.vercel.app",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${openSans.variable} ${nunitoSans.variable} ${prompt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
