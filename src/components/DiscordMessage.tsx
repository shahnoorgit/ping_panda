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
    </div>
  )
}

export default DiscordMessage
