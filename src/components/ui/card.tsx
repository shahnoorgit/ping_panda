import { cn } from "@/lib/utils"
import React, { HTMLAttributes } from "react"

interface cardProps extends HTMLAttributes<HTMLDivElement> {
  contentClassName?: string
}

const Card = ({
  className,
  children,
  contentClassName,
  ...props
}: cardProps) => {
  return (
    <div
      {...props}
      className={cn(
        " relative rounded-lg text-card-foreground bg-gray-50",
        className
      )}
    >
      <div className={cn(" relative z-10 p-6", contentClassName)}>
        {children}
      </div>
      <div className=" absolute z-0 inset-px rounded-lg bg-white" />
      <div className="pointer-events-none z-0 absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
    </div>
  )
}

export default Card
