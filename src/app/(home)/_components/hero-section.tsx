"use client"

import { ArrowRight } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { fade, fadeUp } from "@/lib/motion"

export function HeroSection() {
  const pathname = usePathname()
  return (
    <section id="sobre">
      <div className="relative flex justify-center items-center" id="tela">
        <div className="absolute inset-0 gradient-hero" />

        <AnimatePresence mode="wait">
          <div className="z-5 text-center max-container">
            <motion.div
              animate="visible"
              exit="exit"
              initial="hidden"
              key={pathname}
              variants={fadeUp(60)}
            >
              <motion.p
                animate="visible"
                className="mb-2 md:mb-3 lg:mb-4 font-medium text-accent text-f0 uppercase tracking-wider"
                exit="exit"
                initial="hidden"
                transition={{ delay: 0.2 }}
                variants={fade}
              >
                Olá, eu sou
              </motion.p>
              <h1 className="bg-clip-text bg-linear-to-br from-foreground via-foreground to-accent mb-3 md:mb-5 lg:mb-6 font-bold text-f8 text-transparent sm:text-f10 md:text-f11 lg:text-8xl text-balance">
                Paulo Sérgio
              </h1>
              <p className="mb-5 md:mb-7 lg:mb-8 text-f3 text-muted-foreground md:text-f4">
                Desenvolvedor Front-End
              </p>
              <p className="mx-auto mb-8 md:mb-10 lg:mb-12 max-w-2xl text-f1 text-muted-foreground md:text-f2 leading-relaxed">
                Transformo ideias em interfaces elegantes e funcionais, usando
                React, Next.js e Tailwind CSS para entregar soluções digitais
                que unem desempenho, estética e usabilidade.
              </p>

              <motion.div
                animate="visible"
                className="flex max-sm:flex-col-reverse justify-center gap-4"
                exit="exit"
                initial="hidden"
                transition={{ delay: 0.6 }}
                variants={fade}
              >
                <Link className="scroll-smooth" href="/projetos" tabIndex={-1}>
                  <Button className="group" size="lg">
                    Ver projetos
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#contato" tabIndex={-1}>
                  <Button size="lg" variant="outline">
                    Entrar em contato
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  )
}
