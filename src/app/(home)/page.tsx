import type { Post } from "@/@types/post-types"
import type { Project } from "@/@types/project-types"
import { getPosts, getProjects } from "@/lib/api"
import { ContactSection } from "./_components/contact-section"
import { FeaturedProjects } from "./_components/featured-projects"
import { HeroSection } from "./_components/hero-section"
import { LatestPosts } from "./_components/latest-posts"
import { SkillsSection } from "./_components/skills-section"
import { TechSection } from "./_components/tech-section"

export default async function HomePage() {
  const projects = await getProjects<Project[]>()
  const posts = await getPosts<Post[]>()
  return (
    <main className="flex flex-col justify-center">
      <HeroSection />
      <FeaturedProjects projects={projects} />
      <LatestPosts posts={posts} />
      <TechSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
