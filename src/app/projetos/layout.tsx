import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "LiftCode | Projetos",
  description: "Acesse os projetos que trabalhei recentemente.",
}

export default function ProjectsRoot({ children }: { children: ReactNode }) {
  return <>{children}</>
}
