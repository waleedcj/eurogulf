import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Euro Gulf Tech Contracting LLC - UAEs Premier HVAC Solutions",
  description:
    "Professional refrigeration, cold room, and ventilation services since 2006. Civil Defense Approved HVAC solutions across UAE.",
  keywords:
    "HVAC Sharjah, Cold Room Installation UAE, Kitchen Hood Installation Dubai, Refrigeration Services UAE, Chiller Maintenance Sharjah",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light"  disableTransitionOnChange> */}
          <Header />
          <main>{children}</main>
          <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
