import DashboardPage from "@/components/Dashboard-page"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import React from "react"
import DashboardPageContent from "./dashboardpage-content"
import CreateEvenetCategoryModal from "@/components/createEvenetCategoryModal"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

const page = async () => {
  const auth = await currentUser()
  if (!auth) {
    redirect("/signup")
  }

  const user = await db.user.findUnique({ where: { externalId: auth.id } })
  if (!user) redirect("/signin")

  return (
    <DashboardPage
      cta={
        <CreateEvenetCategoryModal>
          <Button>
            <PlusIcon />
            Add category
          </Button>
        </CreateEvenetCategoryModal>
      }
      title="Dashboard"
    >
      <DashboardPageContent />
    </DashboardPage>
  )
}

export default page
