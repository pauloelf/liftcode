"use client"

import { Code2, Palette, Rocket, Zap } from "lucide-react"
import { motion } from "motion/react"
import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { fade, fadeUp } from "@/lib/motion"

const skills = [
  {
    icon: Code2,
    title: "Código Limpo",
    description:
      "Escrevo código semântico, bem estruturado e fácil de manter seguindo as melhores práticas da indústria.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Transformo designs em interfaces pixel-perfect com atenção aos detalhes e experiência do usuário.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Otimizo aplicações para carregamento rápido e experiência fluida em todos os dispositivos.",
  },
  {
    icon: Zap,
    title: "Responsividade",
    description:
      "Desenvolvo layouts que se adaptam perfeitamente a qualquer tamanho de tela e dispositivo.",
  },
]

export function SkillsSection() {
  const pathname = usePathname()
  return (
    <section className="relative py-32 overflow-hidden" id="diferenciais">
      <div className="absolute inset-0 gradient-section" />

      <div className="relative max-container" key={pathname}>
        <motion.div
          className="mb-16 text-center"
          exit="exit"
          initial="hidden"
          transition={{ duration: 0.6 }}
          variants={fadeUp(40)}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <h2 className="mb-4 font-bold text-f6 md:text-f7 text-balance">
            Diferenciais
          </h2>
          <p className="mx-auto max-w-2xl font-secondary text-f2 text-muted-foreground">
            O que me torna um desenvolvedor front-end completo
          </p>
        </motion.div>

        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              initial="hidden"
              key={skill.title}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={fade}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <Card className="hover:shadow-xl border-border/50 transition-all">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <Badge size="icon" variant="icon">
                      <skill.icon />
                    </Badge>
                    <h3
                      className="font-bold text-f2 text-balance"
                      title={skill.title}
                    >
                      {skill.title}
                    </h3>
                  </div>

                  <p
                    className="text-f1 text-muted-foreground line-clamp-4 leading-relaxed"
                    title={skill.description}
                  >
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
