"use cache"

import { cacheLife } from "next/cache"

export async function getProjects() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  cacheLife("minutes")

  const response = await fetch(
    `${API_URL}/projects?sort=createdAt:desc&populate=*`,
  )
  return (await response.json()).data
}

export async function getPosts() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  cacheLife("minutes")

  const response = await fetch(
    `${API_URL}/posts?sort=createdAt:desc&populate=*`,
  )
  return (await response.json()).data
}
