import { Check } from "lucide-react"
import Heading from "@/components/Heading"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import ShinyButton from "@/components/ShinyButton"
import MockDiscordUI from "@/components/ui/MockDiscordUI"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import DiscordMessage from "@/components/DiscordMessage"

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
                        name: "Mataeo Oriza",
                        email: "n2J8H@example.com",
                      }}
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="Avatar"
                      username="PingPanda"
                      timestamp="Today at 12:34 AM"
                      title="👤 New user sign up"
                    />
                    <DiscordMessage
                      badgeText="signup"
                      content={{
                        name: "Mataeo Oriza",
                        email: "n2J8H@example.com",
                      }}
                      avatarSrc="/brand-asset-profile-picture.png"
                      avatarAlt="Avatar"
                      username="PingPanda"
                      timestamp="Today at 12:34 AM"
                      title="👤 New user sign up"
                    />
                  </AnimatedListItem>
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>
      <section></section>
      <section></section>
    </>
  )
}

export default page
