import DashboardPage from "@/components/Dashboard-page"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import React from "react"
import SettingPageContent from "./SettingPageContent"

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
    <DashboardPage title="Account Settings">
      <SettingPageContent discordId={user.discordId ?? ""} />
    </DashboardPage>
  )
}

export default page
