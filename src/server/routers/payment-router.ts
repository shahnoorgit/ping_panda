import { createCheckOut } from "@/lib/stripe"
import { router } from "../__internals/router"
import { privateProcedure } from "../procedures"

export const paymentRouter = router({
  createCheckoutSession: privateProcedure.mutation(async ({ c, ctx }) => {
    try {
      console.log("staring the pau")

      const user = ctx.user
      if (!user) throw new Error("User not found")
      const session = await createCheckOut({
        userEmail: user.email,
        userId: user.id,
      })

      return c.json({ url: session.url })
    } catch (error) {
      console.error(error)
      return c.json({ error: error })
    }
  }),

  getUserPlan: privateProcedure.query(async ({ c, ctx }) => {
    const user = ctx.user
    return c.json({ plan: user.plan })
  }),
})
