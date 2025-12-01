"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { LogoComponent as Logo } from "@/assets/Logo"
import { fadeDown, fadeRight } from "@/lib/motion"
import { cn } from "@/lib/utils"
import { ThemeSwitcher } from "../shared/theme-switcher"
import { Tooltip } from "../shared/tooltip"
import { Button } from "../ui/button"

const navItems = [
  { name: "Início", href: "/", target: "_self" },
  { name: "Projetos", href: "/projetos", target: "_self" },
  {
    name: "Blog",
    href: "https://commit-blog-paulodev.vercel.app",
    target: "_blank",
  },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      animate="visible"
      className={cn(
        "top-0 right-0 left-0 z-50 fixed transition-all",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "",
      )}
      initial="hidden"
      transition={{ duration: 0.1 }}
      variants={fadeDown(60)}
    >
      <div className="flex justify-between items-center h-[68px] max-container">
        <Link
          className="focus-visible:border-ring outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 hover:scale-105 focus-visible:scale-105 transition-transform"
          href="/"
        >
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = item.href === pathname
            return (
              <Link
                className={cn(
                  "group relative outline-none text-sm transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                href={item.href}
                key={item.name}
                target={item.target}
              >
                {item.name}
                <div
                  className={cn(
                    "-bottom-1 left-0 absolute bg-accent group-focus-visible:bg-foreground h-0.5 transition-[colors_transform]",
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full group-focus-visible:w-full",
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />

          <Tooltip
            animation={fadeDown(12)}
            content="Menu"
            isBlocked={mobileMenuOpen}
          >
            <Button
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="md:hidden select-none"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              size="icon"
              variant="ghost"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </Tooltip>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-border border-b overflow-hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-3 py-4 max-container">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    animate="visible"
                    initial="hidden"
                    key={item.name}
                    transition={{ delay: index * 0.1 }}
                    variants={fadeRight(40)}
                  >
                    <Link
                      className={cn(
                        "block px-4 py-2 rounded-md outline-none font-medium text-f2 transition-colors",
                        isActive
                          ? "text-foreground bg-accent/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/5 focus-visible:bg-accent/5 focus-visible:text-foreground",
                      )}
                      href={item.href}
                      target={item.target}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
