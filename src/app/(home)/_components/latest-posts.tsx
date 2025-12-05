"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { Post } from "@/@types/post-types"
import { Button } from "@/components/ui/button"
import { fade, fadeUp } from "@/lib/motion"
import { PostCard } from "./post-card"

export function LatestPosts({ posts }: { posts: Post[] }) {
  const pathname = usePathname()

  const displayedPosts = posts.slice(0, 3)
  return (
    <section className="relative bg-secondary/20 py-32" id="ultimos-posts">
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
            Últimos Posts
          </h2>
          <p className="mx-auto max-w-2xl font-secondary text-f2 text-muted-foreground">
            Compartilhando conhecimento sobre desenvolvimento front-end
          </p>
        </motion.div>

        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
          {displayedPosts.map((post, index) => (
            <PostCard index={index} key={post.id} post={post} />
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial="hidden"
          variants={fade}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <Link
            href="https://commit-blog-paulodev.vercel.app/topicos"
            tabIndex={-1}
            target="_blank"
          >
            <Button className="group" size="lg">
              Ver todos os posts
              <ArrowRight className="transition-transform group-focus-visible:translate-x-1 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
