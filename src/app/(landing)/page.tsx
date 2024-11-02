import { Check } from "lucide-react"
import Heading from "@/components/Heading"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import ShinyButton from "@/components/ShinyButton"

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
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default page
