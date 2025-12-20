import type * as React from "react"

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  postURL: string
  codeURL: string
  deployURL: string
  image: {
    alt_text: string
    src: string
  }
}

export type ProjectsPaginationProps = {
  total: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  current: number
}
