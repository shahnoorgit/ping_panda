import React from "react"
import { Button } from "./ui/button"
import { ArrowLeft } from "lucide-react"
import Heading from "./Heading"

interface DashboardPageProps {
  title: string
  children?: React.ReactNode
  hideBackButton?: boolean
  cta?: React.ReactNode
}

const DashboardPage = ({
  title,
  children,
  hideBackButton,
  cta,
}: DashboardPageProps) => {
  return (
    <section className=" flex h-full w-full flex-1 flex-col">
      <div className=" p-6 sm:p-8 flex justify-between border-b border-gray-200">
        <div className=" flex flex-col sm:flex-row sm:items-center items-start gap-6">
          <div className=" flex items-center gap-8">
            {hideBackButton ? null : (
              <Button variant="outline" className=" w-fit bg-white">
                <ArrowLeft className=" size-4" />
              </Button>
            )}
            <Heading>{title}</Heading>
          </div>
          {cta ? <div className="w-full">{cta}</div> : null}
        </div>
      </div>
      <div className=" flex-1 p-6 sm:p-8 flex flex-col overflow-auto">
        {children}
      </div>
    </section>
  )
}

export default DashboardPage
