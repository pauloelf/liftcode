export type Post = {
  id: number
  title: string
  description: string
  createdAt: string
  slug: string
  category: {
    name: string
  }
}
