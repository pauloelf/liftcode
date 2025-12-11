import type { Metadata } from "next"
import { Nunito_Sans, Open_Sans, Prompt } from "next/font/google"
import "./globals.css"
import { DecorativeElements } from "@/components/layout/decorative-pattern"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/providers/theme-provider"

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
  icons: {
    icon: "svg/favicon.svg",
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
    <html data-scroll-behavior="smooth" lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${nunitoSans.variable} ${prompt.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen">
            <Toaster />
            <Header />
            <DecorativeElements />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
