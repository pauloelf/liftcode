"use client"

import { motion } from "motion/react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import type { Project } from "@/@types/project-types"
import { ProjectCard } from "@/components/shared/project-card"
import { fade, fadeUp } from "@/lib/motion"
import { ProjectsPagination } from "./projects-pagination"

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 4

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const displayedProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  )

  return (
    <section className="relative py-32 overflow-hidden" id="projetos">
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
          <h1 className="mb-4 font-bold text-f7 md:text-f8 text-balance">
            Todos os Projetos
          </h1>

          <p className="mx-auto max-w-2xl font-secondary text-f2 text-muted-foreground">
            Explore meu portfólio completo de projetos e trabalhos desenvolvidos
          </p>
        </motion.div>

        {totalPages > 1 && (
          <motion.div
            className="flex justify-self-end items-center mb-16"
            initial="hidden"
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fade}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <ProjectsPagination
              current={currentPage}
              setCurrent={setCurrentPage}
              total={totalPages}
            />
          </motion.div>
        )}

        <motion.div className="space-y-24">
          {displayedProjects.map((project, index) => (
            <ProjectCard index={index} key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
