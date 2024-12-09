import { SignInButton, SignOutButton } from "@clerk/nextjs"
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { currentUser } from "@clerk/nextjs/server"

const Navbar = async () => {
  const user = await currentUser()
  return (
    <nav className=" sticky z-100 h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className=" flex h-16 items-center justify-between">
          <Link className=" flex z-40 font-semibold" href={"/"}>
            Ping<span className=" text-brand-700">Panda</span>
          </Link>
          <div className=" h-full flex items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button size={"sm"} variant={"ghost"}>
                    <span>sign-out</span>
                  </Button>
                </SignOutButton>
                <Link
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-1",
                  })}
                  href={"/dashboard"}
                >
                  Dashboard <ArrowRight className=" size-4 ml-1.5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                  href={"/pricing"}
                >
                  Pricing
                </Link>
                <Link
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                  href={"/signin"}
                >
                  Sign In
                </Link>
                <div className=" w-px h-8 bg-gray-200" />
                <Link
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-1.5",
                  })}
                  href={"/sign-up"}
                >
                  Sign Up <ArrowRight className=" size-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
