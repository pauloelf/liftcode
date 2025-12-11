"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "motion/react"
import { usePathname } from "next/navigation"
import { Tooltip } from "@/components/shared/tooltip"
import { Badge } from "@/components/ui/badge"
import { fade, fadeDown, fadeLeft, fadeRight } from "@/lib/motion"
import { ContactForm } from "./contact-form"

const links = [
  {
    key: "E-mail",
    icon: Mail,
    title: "contato.paulofws@gmail.com",
    href: "mailto:contato.paulofws@gmail.com",
  },
  {
    key: "Github",
    icon: Github,
    title: "pauloelf",
    href: "https://github.com/pauloelf",
  },
  {
    key: "LinkedIn",
    icon: Linkedin,
    title: "paulosergioelf",
    href: "https://www.linkedin.com/in/paulosergioelf/",
  },
]

export function ContactSection() {
  const pathname = usePathname()

  return (
    <section className="relative py-32 overflow-hidden" id="contato">
      <div className="max-container" key={pathname}>
        <div className="gap-12 grid md:grid-cols-2">
          <motion.div
            className="space-y-8 max-md:order-2"
            initial="hidden"
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeLeft(60)}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            className="space-y-8 max-md:order-1 max-md:text-center"
            initial="hidden"
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeRight(60)}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div>
              <h3 className="mb-6 font-bold text-f6 md:text-f7">
                Entre em Contato
              </h3>
              <p className="mb-8 text-f2 text-muted-foreground leading-relaxed">
                Tem algum projeto em mente? Quer bater um papo sobre tecnologia?
                Ou simplesmente quer dizer oi? Sinta-se à vontade para entrar em
                contato!
              </p>
            </div>

            <div className="flex flex-wrap max-md:justify-center gap-4">
              {links.map((link, index) => (
                <Tooltip
                  animation={fadeDown(12)}
                  content={link.title}
                  key={link.key}
                  side="bottom"
                >
                  <motion.a
                    aria-label={`Link do ${link.key}`}
                    className="flex items-center gap-4 bg-card p-4 border border-border hover:border-accent focus-visible:border-accent/30 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-colors"
                    href={link.href}
                    initial="hidden"
                    target="_blank"
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    variants={fade}
                    viewport={{ once: true }}
                    whileInView="visible"
                  >
                    <Badge size="icon" variant="icon">
                      <link.icon />
                    </Badge>
                    <span className="max-lg:hidden">{link.key}</span>
                  </motion.a>
                </Tooltip>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
