import { httpHandler } from "@/server"

// Setting the runtime to 'nodejs'
export const runtime = "edge"

export { httpHandler as GET, httpHandler as POST }
