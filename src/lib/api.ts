"use cache"

import { collection, getDocs, limit, orderBy, query } from "firebase/firestore"
import { cacheLife } from "next/cache"
import type { Post } from "@/@types/post-types"
import type { Project } from "@/@types/project-types"
import { db } from "./firebase"

export async function getProjects(): Promise<Project[]> {
  const projectsRef = collection(db, "projects")
  cacheLife("minutes")

  const q = query(projectsRef, orderBy("createdAt", "desc"))

  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => {
    const data = doc.data()
    return {
      id: doc.id,
      title: data.title,
      description: data.description,
      tags: data.tags,
      postURL: data.postURL,
      codeURL: data.codeURL,
      deployURL: data.deployURL,
      image: data.image,
      createdAt: data.createdAt.toDate().toISOString(),
    }
  })
}

export async function getPosts(): Promise<Post[]> {
  const postsRef = collection(db, "posts")
  cacheLife("minutes")

  const q = query(postsRef, orderBy("createdAt", "desc"), limit(3))

  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => {
    const data = doc.data()
    return {
      id: doc.id,
      title: data.title,
      description: data.description,
      slug: data.slug,
      category: data.category,
      createdAt: data.createdAt.toDate().toISOString(),
    }
  })
}

export async function getCurrentYear() {
  return new Date().getFullYear()
}
