"use cache"

import { collection, getDocs, limit, orderBy, query } from "firebase/firestore"
import { cacheLife } from "next/cache"
import { db } from "./firebase"

export async function getProjects<T>() {
  const projectsRef = collection(db, "projects")
  cacheLife("minutes")

  const q = query(projectsRef, orderBy("createdAt", "desc"))

  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt.toDate().toISOString(),
  })) as T
}

export async function getPosts<T>() {
  const postsRef = collection(db, "posts")
  cacheLife("minutes")

  const q = query(postsRef, orderBy("createdAt", "desc"), limit(3))

  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt.toDate().toISOString(),
  })) as T
}

export async function getCurrentYear() {
  return new Date().getFullYear()
}
