import React, { PropsWithChildren } from "react"
import { Icons } from "@/components/icons"
import {
  Cog,
  Gift,
  Headphones,
  HelpCircle,
  Inbox,
  Menu,
  Mic,
  Phone,
  Pin,
  PlusCircle,
  Search,
  Smile,
  Sticker,
  UserCircle,
  UserCircleIcon,
  Video,
} from "lucide-react"
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
                  <div className=" size-8 bg-discord-background rounded-full mr-3" />
                  <span className="font-medium">User {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" p-2 bg-[#292b2f] flex items-center">
          <div className="size-8 rounded-full bg-brand-700 mr-2 " />
          <div className=" flex-1">
            <p className=" text-sm font-medium text-white">You</p>
            <p className=" text-xs text-[#b9bbbe] flex items-center">
              @your_account
            </p>
          </div>
          <div className=" flex items-center space-x-2">
            <Mic className=" size-5 text-[#b9bbbe] cursor-pointer hover:text-white" />
            <Headphones className=" size-5 text-[#b9bbbe] cursor-pointer hover:text-white" />
            <Cog className=" size-5 text-[#b9bbbe] cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        {/* DM header */}
        <div className=" h-16 bg-[#36393f] flex items-center px-4 shadow-sm border-b border-[#202225]">
          <div className="md:hidden mr-4 ">
            <Menu className=" size-6 text-[#b9bbbe] hover:text-white cursor-pointer" />
          </div>
          <div className=" items-center flex ">
            <div className=" relative">
              <Image
                src={"/brand-asset-profile-picture.png"}
                alt="logo"
                width={40}
                height={40}
                className=" object-cover rounded-full mr-3"
              />
              <div className=" absolute bottom-0 right-3 w-3 h-3 bg-[#3ba553] rounded-full" />
            </div>
            <p className=" font-semibold text-white">PingPanda</p>
          </div>
          <div className=" ml-auto flex items-center space-x-4 text-[#b9bbbe]">
            <Phone className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Video className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Pin className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <UserCircle className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Search className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Inbox className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <HelpCircle className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
          </div>
        </div>
        {/* Messages History */}
        <div className=" flex-1 overflow-y-auto p-4 bg-discord-background flex flex-col-reverse ">
          {children}
        </div>
        {/* Message Input */}
        <div className=" p-4">
          <div className="flex items-center bg-[#40444b] p-1 rounded-lg">
            <PlusCircle className="mx-3 text-[#b9bbbe] hover:text-white cursor-not-allowed" />
            <input
              readOnly
              type="text"
              placeholder="Message @PingPanda"
              className=" flex-1 bg-transparent py-2.5 px-1 text-white placeholder-[#72767d] focus:outline-none cursor-not-allowed"
            />
            <div className=" flex items-center space-x-3 mx-3 text-[#b9bbbe] ">
              <Gift className=" size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <Sticker className=" size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <Smile className=" size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MockDiscordUI
