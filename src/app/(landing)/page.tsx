import { Check, Star } from "lucide-react"
import Heading from "@/components/Heading"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import ShinyButton from "@/components/ShinyButton"
import { MockDiscordUI } from "@/components/ui/MockDiscordUI"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import DiscordMessage from "@/components/DiscordMessage"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import Image from "next/image"

const page = () => {
  const codeSnippet = `await fetch("http://localhost:3000/api/v1/events", {
  method: "POST",
  body: JSON.stringify({
    category: "sale",
    fields: {
      plan: "PRO",
      email: "zoe.martinez2001@email.com",
      amount: 49.00
    }
  }),
  headers: {
    Authorization: "Bearer <YOUR_API_KEY>"
  }
})`
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
                        <div className=" border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          PingPanda.js
                        </div>
                      </div>
                    </div>
                    <div className=" overflow-hidden ">
                      <div className=" max-h-[30rem] ">
                        <SyntaxHighlighter
                          language="typescript"
                          style={{
                            ...oneDark,
                            'pre[class*="language-"]': {
                              ...oneDark['pre[class*="language-"]'],
                              background: "transparent",
                              overflow: "hidden",
                            },
                            'code[class*="language-"]': {
                              ...oneDark['code[class*="language-"]'],
                              background: "transparent",
                            },
                          }}
                        >
                          {codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative py-24 sm:py-32 bg-white">
        <MaxWidthWrapper className=" flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className=" text-center text-base/7 font-semibold text-brand-600">
              Experiences That Matter
            </h2>
            <Heading className=" text-center">
              Real Feedback From Real People
            </Heading>
          </div>
          <div className=" mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 devide-y lg:devide-y-0 lg:divide-x devide-gray-200">
            {/** first experience */}
            <div className=" flex flex-auto gap-4 bg-brand-25 sm:p-8 flex-col p-6 lg:p-16 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem]">
              <div className=" flex gap-0.5 mb-2 justify-center lg:justify-start">
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
              </div>
              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                PingPanda has completely transformed how we manage our
                workflows. The API is intuitive and incredibly reliable—it's
                saved us hours of manual work every week!
              </p>
              <div className=" flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2 ">
                <Image
                  src={"/user-2.png"}
                  alt={"user-2"}
                  width={48}
                  height={48}
                  className={" rounded-full object-cover"}
                />
                <div className=" flex flex-col items-center sm:items-start">
                  <p className=" font-semibold flex items-center">
                    Sonam Kumari
                  </p>
                  <p className=" text-sm/6 text-gray-600">Product Manager</p>
                </div>
              </div>
            </div>
            <div className=" flex flex-auto gap-4 bg-brand-25 sm:p-8 flex-col p-6 lg:p-16 rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]">
              <div className=" flex gap-0.5 mb-2 justify-center lg:justify-start">
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
              </div>
              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                As a developer, I've used countless tools, but PingPanda stands
                out. It's simple to use, and the insights it provides are
                spot-on. Highly recommend it for SaaS teams!
              </p>
              <div className=" flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2 ">
                <Image
                  src={"/user-1.png"}
                  alt={"user-1"}
                  width={48}
                  height={48}
                  className={" rounded-full object-cover"}
                />
                <div className=" flex flex-col items-center sm:items-start">
                  <p className=" font-semibold flex items-center">
                    Okamura Hideki
                  </p>
                  <p className=" text-sm/6 text-gray-600">SaaS Developer</p>
                </div>
              </div>
            </div>
          </div>
          <ShinyButton
            href="/signin"
            className=" relative z-10 h-14 w-full max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            Start for free today
          </ShinyButton>
        </MaxWidthWrapper>
      </section>
    </>
  )
}

export default page
