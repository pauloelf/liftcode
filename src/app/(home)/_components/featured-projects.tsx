"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { Project } from "@/@types/project-types"
import { ProjectCard } from "@/components/shared/project-card"
import { Button } from "@/components/ui/button"
import { fade, fadeUp } from "@/lib/motion"

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const pathname = usePathname()

  const displayedProjects = projects.slice(0, 3)

  return (
    <section
      className="relative py-32 overflow-hidden"
      id="projetos_em_destaque"
    >
      <div className="absolute inset-0 gradient-section" />

      <div className="relative max-container">
        <motion.div
          className="mb-16 text-center"
          exit="exit"
          initial="hidden"
          key={pathname}
          transition={{ duration: 0.6 }}
          variants={fadeUp(40)}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <h2 className="mb-4 font-bold text-f6 md:text-f7 text-balance">
            Projetos em Destaque
          </h2>
          <p className="mx-auto max-w-2xl font-secondary text-f2 text-muted-foreground">
            Alguns dos trabalhos que desenvolvi recentemente
          </p>
        </motion.div>

        <motion.div className="space-y-24">
          {displayedProjects.map((project, index) => (
            <ProjectCard index={index} key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-16"
          initial="hidden"
          variants={fade}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <Link href="/projetos" tabIndex={-1}>
            <Button className="group" size="lg">
              Ver todos os projetos
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
