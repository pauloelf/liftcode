import { ArrowRight, ExternalLink, Github } from "lucide-react"
import * as motion from "motion/react-client"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/@types/project-types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { fadeLeft, fadeRight, zoom } from "@/lib/motion"
import { AspectRatio } from "../ui/aspect-ratio"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className="group">
      <div
        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
      >
        <motion.div
          className="flex-1 space-y-6"
          exit="exit"
          initial="hidden"
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={isEven ? fadeLeft(200) : fadeRight(200)}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <div>
            <h3 className="mb-4 font-bold text-f5 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-f2 text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.split(",").map((tag) => {
              const tagFormatted = tag.slice(1, -1).replaceAll('"', "").trim()
              return (
                <Badge key={tagFormatted} variant="secondary">
                  {tagFormatted}
                </Badge>
              )
            })}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href={project.deployURL} tabIndex={-1} target="_blank">
              <Button size="sm" variant="default">
                <ExternalLink className="mr-2 w-4 h-4" />
                Deploy
              </Button>
            </Link>
            <Link href={project.codeURL} tabIndex={-1} target="_blank">
              <Button size="sm" variant="outline">
                <Github className="mr-2 w-4 h-4" />
                GitHub
              </Button>
            </Link>
            <Link href={project.postURL} tabIndex={-1} target="_blank">
              <Button className="group/btn" size="sm" variant="link">
                Ver mais
                <ArrowRight className="transition-transform group-focus-visible/btn:translate-x-1 group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full"
          exit="exit"
          initial="hidden"
          transition={{ duration: 0.2 }}
          variants={zoom}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileInView="visible"
        >
          <AspectRatio
            className="relative bg-card shadow-2xl border border-border rounded-lg overflow-hidden"
            ratio={16 / 9}
          >
            <Image
              alt={project.image.alternativeText}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              height={project.image.height}
              src={project.image.url}
              width={project.image.width}
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </AspectRatio>
        </motion.div>
      </div>
    </div>
  )
}
