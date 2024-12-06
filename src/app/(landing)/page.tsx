import { Check } from "lucide-react"
import Heading from "@/components/Heading"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import ShinyButton from "@/components/ShinyButton"
import { MockDiscordUI } from "@/components/ui/MockDiscordUI"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import DiscordMessage from "@/components/DiscordMessage"
import Image from "next/image"

const page = () => {
  return (
    <>
      <section className=" relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className=" relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent">
                  Delivered To Your Discord
                </span>
              </Heading>
            </div>
            <p className=" text-base/7 text-gray-600 max-w-prose text-pretty text-center">
              Ping Pandaz is easiest way to monitor your saas applications. Get
              instant notifications for{" "}
              <span className="font-semibold text-gray-700">
                sales, new users, or any other events{" "}
              </span>
              sent directly to your Discord !
            </p>
            <ul className=" space-y-2 text-base/7 text-left text-gray-600 flex flex-col items-start">
              {[
                "Real-time Discord alerts for critical events",
                "Buy once, use forever",
                "Track sales, new users, or any other events",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 text-left items-center">
                  <Check className=" size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className=" w-full max-w-80">
              <ShinyButton
                href="/sign-up"
                className=" relative z-10 text-base shadow-lg transition-shadow duration-300 hover:shadow-xl h-14 w-full"
              >
                Start For Free
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className=" relative bg-brand-25 pb-4">
        <div className=" absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
        <div className=" relative mx-auto ">
          <MaxWidthWrapper className=" relative">
            <div className=" -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900 lg:-m-4 lg:rounded-2xl lg:p-4 ring-inset">
              <MockDiscordUI>
                <AnimatedList>
                  <AnimatedListItem>
                    <DiscordMessage
                      badgeText="signup"
                      content={{
                        Name: "Mataeo Oriza",
                        Email: "n2J8H@example.com",
                      }}
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="Avatar"
                      username="PingPanda"
                      timestamp="Today at 12:34 AM"
                      title="👤 New user sign up"
                    />
                    <DiscordMessage
                      badgeText="Revenue"
                      badgeColor="#faa61a"
                      content={{
                        Amount: "$100.00",
                        Email: "Rohit2002@email.com",
                        Plan: "Premium",
                      }}
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="Avatar"
                      username="PingPanda"
                      timestamp="Today at 02:21 AM"
                      title="💰 Payment Recieved"
                    />
                    <DiscordMessage
                      badgeText="Milestone"
                      badgeColor="#5865f2"
                      content={{
                        RecurringRevenue: "$5.000",
                        Growth: "+9.5%",
                      }}
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="Avatar"
                      username="PingPanda"
                      timestamp="Today at 05:11 AM"
                      title="🎉 Revenue Milestone Reached"
                    />
                  </AnimatedListItem>
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Intuitive Monitoring
            </h2>
            <Heading>Stay ahead with real-time insights</Heading>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* first bento grid element */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Real-time notifications
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Get notified about critical events the moment they happen,
                    no matter if you're at home or on the go.
                  </p>
                </div>

                <div className=" relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm [container-type:inline-size]">
                  <div className=" absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      className=" size-full object-cover object-top"
                      src={"/phone-screen.png"}
                      alt="Phone Screen"
                      fill
                    />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]" />
            </div>

            {/* second bento grid element */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute rounded-lg inset-px bg-white max-lg:rounded-t-[2rem]" />
              <div className=" relative flex flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className=" px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Track Any Event
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    For new user signups to successfully payments, PingPanda
                    notifies you for all crucial events in real-time.
                  </p>
                </div>
                <div className=" flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className=" w-full max-lg:max-w-xs "
                    src={"/bento-any-event.png"}
                    alt={"Bento Grid image"}
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]" />
            </div>
            {/* third bento grid element */}
            <div className=" relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className=" absolute inset-px rounded-lg bg-white " />
              <div className=" relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className=" px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Track Any Properties
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Add any custom data you like to an event, such as a user
                    email a purchase amount or an exceeded quota.
                  </p>
                </div>
                <div className=" flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className=" w-full max-lg:max-w-xs "
                    src={"/bento-custom-data.png"}
                    alt={"Bento Box image"}
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
            </div>
            {/* fourth bento grid element */}
            <div className=" relative lg:row-span-2">
              <div className=" absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
              <div className=" relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)]">
                <div className=" px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Easy Integration
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Connect PingPanda with your existing workflows in minutes
                    and call our intuative API from any language.
                  </p>
                </div>
                <div className=" relative min-h-[30rem] w-full grow ">
                  <div className=" absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="">
                        PingPanda.js
                        </div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
    </>
  )
}

export default page
