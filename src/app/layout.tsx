import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "../components/providers"
import { EB_Garamond } from "next/font/google"
import { cn } from "@/lib/utils"

import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "PingPanda",
  description: "Event tracking made easy",
  icons: [{ rel: "icon", url: "/brand-asset-profile-picture.png" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(inter.variable, eb_garamond.variable)}>
      <ClerkProvider>
        <body className="font-sans min-h-[calc(100vh-1px)] flex flex-col bg-brand-50 text-brand-950 antialiased">
          <main className=" flex-1 flex flex-col relative">
            <Providers>{children}</Providers>
          </main>
        </body>
      </ClerkProvider>
    </html>
  )
}
