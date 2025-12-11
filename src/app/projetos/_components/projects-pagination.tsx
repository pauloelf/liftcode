"use client"

import { useEffect } from "react"
import type { ProjectsPaginationProps } from "@/@types/project-types"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function ProjectsPagination({
  total,
  current,
  setCurrent,
}: ProjectsPaginationProps) {
  useEffect(() => {
    setCurrent(1)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [current])

  function handlePageChange(pageNumber: number) {
    if (pageNumber < 1 || pageNumber > total) return
    if (pageNumber === current) return

    setCurrent(pageNumber)
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={current === 1}
            disabled={current === 1}
            onClick={() => handlePageChange(current - 1)}
          />
        </PaginationItem>
        {Array.from({ length: total }, (_, index) => index + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={page === current}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            aria-disabled={current === total}
            disabled={current === total}
            onClick={() => handlePageChange(current + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
