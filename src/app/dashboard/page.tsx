import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import React from "react"

const page = async () => {
  const auth = await currentUser()
  if (!auth) {
    redirect("/signup")
  }

  const user = await db.user.findUnique({ where: { externalId: auth.id } })
  if (!user) redirect("/signin")

  return <p>page</p>
}

export default page
