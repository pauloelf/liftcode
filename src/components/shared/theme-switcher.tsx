"use client"

import { Palette } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import { fadeDown } from "@/lib/motion"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ClientOnly } from "./client-only"
import { Tooltip } from "./tooltip"

const themes = [
  {
    name: "light",
    label: "Light",
    colors: ["oklch(0.98 0.005 80)", "oklch(0.58 0.18 290)"],
  },
  {
    name: "dark",
    label: "Dark",
    colors: ["oklch(0.12 0.015 280)", "oklch(0.72 0.2 290)"],
  },
  {
    name: "forest",
    label: "Forest",
    colors: ["oklch(0.97 0.01 140)", "oklch(0.52 0.16 160)"],
  },
  {
    name: "dracula",
    label: "Dracula",
    colors: ["oklch(0.25 0.02 290)", "oklch(0.72 0.26 310)"],
  },
  {
    name: "ember",
    label: "Ember",
    colors: ["oklch(0.97 0.01 30)", "oklch(0.6 0.18 20)"],
  },
  {
    name: "neon",
    label: "Neon",
    colors: ["oklch(0.75 0.3 310)", "oklch(0.7 0.32 150)"],
  },
  {
    name: "ocean",
    label: "Ocean",
    colors: ["oklch(0.97 0.008 230)", "oklch(0.56 0.2 210)"],
  },
] as const

export function ThemeSwitcher() {
  const { theme: currentTheme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <ClientOnly>
      <Tooltip animation={fadeDown(12)} content="Temas" isBlocked={menuOpen}>
        <DropdownMenu modal={false} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger asChild>
            <Button aria-label="Trocar tema" size={"icon"} variant={"ghost"}>
              <Palette />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {themes.map((theme) => (
              <DropdownMenuCheckboxItem
                aria-checked={currentTheme === theme.name}
                checked={currentTheme === theme.name}
                key={theme.name}
                onCheckedChange={() => setTheme(theme.name)}
              >
                <div
                  className="border border-border rounded-full size-4"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors[0]} 50%, ${theme.colors[1]} 50%)`,
                  }}
                />
                {theme.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </Tooltip>
    </ClientOnly>
  )
}
