import { j } from "./__internals/j"

const authMiddleware = j.middleware(({ next }) => {
  const user = { name: "john" }
  return next({ user })
})

/**
 * Middleware for providing a built-in cache with your Prisma database.
 *
 * You can remove this if you don't like it, but caching can massively speed up your database queries.
 */

/**
 * Public (unauthenticated) procedures
 *
 * This is the base piece you use to build new queries and mutations on your API.
 */
export const baseProcedure = j.procedure
export const publicProcedure = baseProcedure
export const privateProcedure = baseProcedure.use(authMiddleware)
