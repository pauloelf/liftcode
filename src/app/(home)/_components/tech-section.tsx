"use client"

import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"
import {
  FigmaIcon,
  GitIcon,
  JavascriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactjsIcon,
  TailwindcssIcon,
  TypescriptIcon,
} from "@/assets"
import { TechBadge } from "@/components/shared/tech-badge"
import { Marquee } from "@/components/ui/marquee"
import { fade, fadeUp } from "@/lib/motion"

const technologies = [
  { name: "React", icon: ReactjsIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "Tailwind CSS", icon: TailwindcssIcon },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Git", icon: GitIcon },
  { name: "Figma", icon: FigmaIcon },
]

export function TechSection() {
  const pathname = usePathname()

  return (
    <section className="relative py-32 overflow-hidden" id="tecnologias">
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
            Tecnologias
          </h2>
          <p className="mx-auto max-w-2xl font-secondary text-f2 text-muted-foreground">
            Ferramentas que domino e utilizo no dia a dia
          </p>
        </motion.div>

        <AnimatePresence>
          <motion.div
            exit="exit"
            initial="hidden"
            transition={{
              duration: 0.5,
            }}
            variants={fade}
            whileInView="visible"
          >
            <Marquee className="[--duration:20s]">
              {[...technologies].map((tech) => (
                <TechBadge Icon={tech.icon} key={tech.name} name={tech.name} />
              ))}
            </Marquee>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
