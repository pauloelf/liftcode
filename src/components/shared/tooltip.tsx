"use client"

import { AnimatePresence, motion, type Variants } from "motion/react"
import type * as React from "react"
import { useState } from "react"
import * as T from "../ui/tooltip"

/**
 * @param (position) - String(x: horizontal | y: vertical)
 *
 * Ex: x
 *
 * @param (animation) - Array[number](a: hidden & b: animate & c: exit)
 *
 * Ex: [20, 0, 20]
 */

export function Tooltip({
  children,
  isBlocked,
  content,
  side = "top",
  animation,
  ...props
}: {
  children: React.ReactNode
  isBlocked?: boolean
  content: string
  side?: "top" | "right" | "bottom" | "left"
  animation: Variants
} & React.ComponentProps<"button">) {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  return (
    <T.Tooltip delayDuration={100} open={isBlocked ? false : tooltipOpen}>
      <T.TooltipTrigger
        asChild
        {...props}
        onBlur={() => setTooltipOpen(false)}
        onFocus={() => setTooltipOpen(true)}
        onMouseEnter={() => setTooltipOpen(true)}
        onMouseLeave={() => setTooltipOpen(false)}
      >
        <div>{children}</div>
      </T.TooltipTrigger>
      <T.TooltipContent side={side}>
        <AnimatePresence>
          {tooltipOpen && (
            <motion.div
              animate="visible"
              exit="exit"
              initial="hidden"
              variants={animation}
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </T.TooltipContent>
    </T.Tooltip>
  )
}
