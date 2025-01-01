"use client"
import Card from "@/components/ui/card"
import { client } from "@/lib/client"
import { Plan } from "@prisma/client"
import { useMutation, useQuery } from "@tanstack/react-query"
import { error } from "console"
import { format } from "date-fns"
import { BarChart } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

const UpgradePageContent = ({ Plan }: { Plan: Plan }) => {
  const router = useRouter()
  const { data: usageData } = useQuery({
    queryKey: ["usage"],
    queryFn: async () => {
      const res = await client.project.getUsage.$get()
      return await res.json()
    },
  })

  const { mutate: createCheckoutSession } = useMutation({
    mutationFn: async () => {
      const res = await client.payment.createCheckoutSession.$post()
      return await res.json()
    },
    onSuccess: ({ url }) => {
      if (url) router.push(url)
    },
    onError(error, variables, context) {
      console.error(error)
    },
  })

  return (
    <div className=" max-w-3xl flex flex-col gap-8">
      <div>
        <h1 className=" mt-2 text-xl/8 font-medium tracking-tight text-gray-900">
          {Plan === "PRO" ? "Plan Pro" : "Plan Free"}
        </h1>
        <p className="text-gray-600 max-w-prose text-sm/6">
          {Plan === "PRO"
            ? "Thank You For Supporting PingPanda."
            : "Get Access To More Events, Categories and PremiumSupport."}
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-2 border-brand-700">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="text-sm/6 font-medium">Total Events</p>
            <BarChart className="size-4 text-muted-foreground" />
          </div>

          <div>
            <p className="text-2xl font-bold">
              {usageData?.eventsUsed || 0} of{" "}
              {usageData?.eventsLimit.toLocaleString() || 100}
            </p>
            <p className="text-xs/5 text-muted-foreground">
              Events this period
            </p>
          </div>
        </Card>
        <Card className="">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="text-sm/6 font-medium">Events Categories</p>
            <BarChart className="size-4 text-muted-foreground" />
          </div>

          <div>
            <p className="text-2xl font-bold">
              {usageData?.categoriesUsed || 0} of{" "}
              {usageData?.categoriesLimit.toLocaleString() || 10}
            </p>
            <p className="text-xs/5 text-muted-foreground">Active Categories</p>
          </div>
        </Card>
      </div>
      <p className=" text-sm text-gray-500">
        Usage Will Reset on{" "}
        {usageData?.resetDate ? (
          format(usageData?.resetDate, "MMM d, yyyy")
        ) : (
          <span className=" animate-pulse w-8 h-4 bg-gray-200"></span>
        )}
        {Plan !== "PRO" ? (
          <span
            onClick={() => createCheckoutSession()}
            className=" underline cursor-pointer inline text-brand-600"
          >
            {" "}
            Upgrade to Pro to get more events and categories &rarr;
          </span>
        ) : null}
      </p>
    </div>
  )
}

export default UpgradePageContent
