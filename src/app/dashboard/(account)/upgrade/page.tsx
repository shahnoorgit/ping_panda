import DashboardPage from "@/components/Dashboard-page"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import React from "react"
import UpgradePageContent from "./UpgradePageContent"

const page = async () => {
  const auth = await currentUser()
  if (!auth) return redirect("/sign-in")
  const user = await db.user.findUnique({
    where: {
      externalId: auth.id,
    },
  })

  if (!user) return redirect("/sign-in")

  return (
    <DashboardPage title="Upgrade Plan">
      <UpgradePageContent Plan={user.plan} />
    </DashboardPage>
  )
}

export default page
