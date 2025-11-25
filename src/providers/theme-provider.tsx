"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type * as React from "react"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      themes={["light", "dark", "forest", "dracula", "ember", "neon", "ocean"]}
    >
      {children}
    </NextThemesProvider>
  )
}
