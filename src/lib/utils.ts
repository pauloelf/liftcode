import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (
  value: Date | string | number,
  includeTime = false,
): string => {
  const date =
    typeof value === "string" || typeof value === "number"
      ? new Date(value)
      : value
  if (Number.isNaN(date.getTime())) return ""

  const options: Intl.DateTimeFormatOptions = includeTime
    ? {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    : { day: "2-digit", month: "2-digit", year: "numeric" }

  return date.toLocaleDateString("pt-BR", options)
}
