import { getProjects } from "@/lib/api"
import { ProjectsSection } from "./_components/projects-section"

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <main className="flex flex-col justify-center">
      <ProjectsSection projects={projects} />
    </main>
  )
}
