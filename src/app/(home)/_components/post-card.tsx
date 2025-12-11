import { ArrowRight, Calendar } from "lucide-react"
import * as motion from "motion/react-client"
import type { Post } from "@/@types/post-types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { fade } from "@/lib/motion"
import { formatDate } from "@/lib/utils"

interface PostCardProps {
  post: Post
  index: number
}

export function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.a
      className="group outline-none"
      exit="exit"
      href={`https://commit-blog-paulodev.vercel.app/topicos/${post.slug}`}
      initial="hidden"
      target="_blank"
      transition={{ duration: 0.6, delay: index * 0.2 }}
      variants={fade}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <Card className="hover:shadow-xl border-border/50 hover:border-accent/70 group-focus-visible:border-accent/30 group-focus-visible:ring-2 group-focus-visible:ring-accent/50 transition-all">
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <Badge variant="secondary">{post.category.name}</Badge>
          </div>
          <h3
            className="font-bold text-f2 group-focus-visible:text-accent group-hover:text-accent text-ellipsis line-clamp-2 md:line-clamp-1 text-balance transition-colors"
            title={post.title}
          >
            {post.title}
          </h3>
          <p
            className="text-f1 text-muted-foreground line-clamp-3 leading-relaxed"
            title={post.description}
          >
            {post.description}
          </p>

          <div className="flex justify-between items-center pt-4">
            <span className="flex items-center gap-2 text-f0 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {formatDate(post.createdAt)}
            </span>

            <ArrowRight className="w-5 h-5 text-accent transition-transform group-focus-visible:translate-x-2 group-hover:translate-x-2" />
          </div>
        </CardContent>
      </Card>
    </motion.a>
  )
}
