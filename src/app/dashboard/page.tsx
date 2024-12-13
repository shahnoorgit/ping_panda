import DashboardPage from "@/components/Dashboard-page"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import React from "react"
import DashboardPageContent from "./dashboardpage-content"

const page = async () => {
  const auth = await currentUser()
  if (!auth) {
    redirect("/signup")
  }

  const user = await db.user.findUnique({ where: { externalId: auth.id } })
  if (!user) redirect("/signin")

  return (
    <DashboardPage title="Dashboard">
      <DashboardPageContent />
    </DashboardPage>
  )
}

export default page
