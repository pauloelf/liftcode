import type * as React from "react"
import { Card, CardContent } from "../ui/card"

interface TechBadgeProps {
  name: string
  Icon: ({
    color,
    ...props
  }: {
    color?: string
  } & React.ComponentProps<"svg">) => React.JSX.Element
}

export function TechBadge({ Icon, name }: TechBadgeProps) {
  return (
    <Card className="group/card hover:border-accent/60 size-32 hover:scale-110">
      <CardContent className="relative flex flex-col justify-center items-center gap-3 text-center">
        <Icon color="var(--accent)" />
        <span className="font-medium text-f0 text-muted-foreground group-hover/card:text-foreground transition-colors">
          {name}
        </span>
      </CardContent>
    </Card>
  )
}
