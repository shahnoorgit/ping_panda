import { cn } from "@/lib/utils"
import React from "react"

interface MaxWidthWrapperProps {
  className?: string
  children: React.ReactNode
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full mx-auto px-2.5 md:px-20 w-full max-w-screen-xl",
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
