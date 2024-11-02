import { cn } from "@/lib/utils"
import React, { HtmlHTMLAttributes } from "react"

interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
  className?: string
}

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      {...props}
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tighter text-zinc-800",
        className
      )}
    >
      {children}
    </h1>
  )
}

export default Heading
