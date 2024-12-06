import { cn } from "@/lib/utils"
import { Clock } from "lucide-react"
import Image from "next/image"
import React from "react"

type DiscordMessageProps = {
  avatarSrc: string
  avatarAlt: string
  username: string
  timestamp: string
  badgeText?: string
  badgeColor?: string
  title: string
  content: {
    [key: string]: string
  }
}

type BadgeStyleType = "#43b581" | "#faa61a" | (string & {})

const getBadgeStyles = (color: BadgeStyleType) => {
  switch (color) {
    case "#43b581":
      return "bg-green-500/10 text-green-400 ring-green-500/20"
    case "#faa61a":
      return "bg-yellow-500/10 text-yellow-400 ring-yellow-500/20"
    default:
      return "bg-gray-500/10 text-gray-400 ring-gray-500/20"
  }
}
const DiscordMessage = ({
  avatarAlt,
  avatarSrc,
  badgeColor = "#43b581",
  badgeText,
  content,
  timestamp,
  title,
  username,
}: DiscordMessageProps) => {
  return (
    <div className="flex w-full items-start justify-start">
      <div className=" flex items-center mb-2">
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          width={40}
          height={40}
          className=" object-cover rounded-full mr-3"
        />
      </div>
      <div className=" w-full max-w-xl ">
        <div className=" flex items-center">
          <p className="font-semibold text-white">{username}</p>
          <span className=" ml-2 px-1.5 py-0.5 text-xs font-semibold bg-brand-700 text-white rounded">
            APP
          </span>
          <span className=" text-gray-400 ml-1.5 text-xs font-normal">
            {timestamp}
          </span>
        </div>
        <div className=" bg-[#2f3136] text-sm w-full rounded mb-4 mt-1.5 p-3">
          <div className=" flex flex-row items-center justify-between mb-2">
            {badgeText ? (
              <span
                className={cn(
                  "inline-flex items-center rounded-md px-2 py-1 text-xs order-2 font-medium  ring-1 ring-inset",
                  getBadgeStyles(badgeColor)
                )}
              >
                {badgeText}
              </span>
            ) : null}
            <div className="text-white order-1 text-base/7 font-semibold">
              {title}
            </div>
          </div>
          {Object.entries(content).map(([key, value]) => (
            <p key={key} className=" text-[#dcddde] text-sm/6">
              <span className=" text-[#b9bbbe]">
                {key} {""}
              </span>

              {value}
            </p>
          ))}
          <p className=" text-[#72767d] text-xs mt-2 flex items-center">
            <Clock className=" size-3 mr-1" /> {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DiscordMessage
