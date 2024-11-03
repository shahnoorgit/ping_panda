import React, { PropsWithChildren } from "react"
import { Icons } from "@/components/icons"
import { Inbox, PlusCircle, UserCircleIcon } from "lucide-react"
import Image from "next/image"

const MockDiscordUI = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-background text-white rounded-lg overflow-hidden shadow-xl">
      <div className=" hidden sm:flex w-[72px] bg-[#202225] items-center flex-col py-3">
        <div className="size-12 bg-discord-brand-color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
          <Icons.discord className="size-3/5 text-white" />
        </div>
        <div className=" w-8 h-[2px] bg-discord-background rounded-full my-2" />
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className=" size-12 bg-discord-background rounded-3xl justify-center hover:rounded-xl flex items-center mb-3 transition-all duration-300 hover:bg-discord-brand-color cursor-not-allowed"
          >
            <span className=" text-lg font-semibold text-gray-400">
              {String.fromCharCode(65 + i)}
            </span>
          </div>
        ))}

        <div className="group mt-auto size-12 bg-discord-background rounded-3xl justify-center hover:rounded-xl flex items-center mb-3 transition-all duration-300 hover:bg-[#3ba55c] cursor-not-allowed">
          <PlusCircle className=" text-[#3ba553] group-hover:text-white" />
        </div>
      </div>
      <div className=" hidden md:flex w-60 bg-[#2f3136] flex-col">
        <div className=" px-4 h-16 border-b border-[#202225] flex items-center shadow-sm">
          <div className="w-full bg-[#202225] sm:rounded px-2  h-8 flex items-center justify-center text-gray-500 cursor-not-allowed">
            Find or start conversation
          </div>
        </div>
        <div className=" overflow-y-auto pt-4 flex-1">
          <div className=" px-2 mb-4">
            <div className=" flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
              <UserCircleIcon className=" mr-3 size-8 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Friends</span>
            </div>
            <div className=" flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
              <Inbox className=" mr-3 size-8 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Nitro</span>
            </div>
          </div>{" "}
          <div className=" px-2 mb-4">
            <h3 className=" text-xs font-semibold text-[#8e9297] px-2 mb-2 uppercase">
              Direct Messages
            </h3>
            <div className=" flex items-center px-2 py-1.5 rounded bg-[#393c4e] text-white cursor-pointer">
              <Image
                className=" object-cover rounded-full mr-3"
                src={"/brand-asset-profile-picture.png"}
                alt="logo"
                width={32}
                height={32}
              />
              <span className=" font-medium">PingPanda</span>
            </div>
            <div className=" my-1 space-y-px">
              {[...Array(4)].map((_, i) => (
                <div
                  className="flex items-center px-2 py-1.5 rounded text-gray-600 cursor-not-allowed"
                  key={i}
                >
                  <div className=" size-8 bg-discord-background rounded-full mr-3">
                    <span className="font-medium">User {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MockDiscordUI
