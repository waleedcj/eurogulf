import type React from "react"
import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Urbanist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Euro Gulf Tech Contracting LLC - UAEs Premier HVAC Solutions",
  description:
    "Professional refrigeration, Cold Storage, and ventilation services since 2006. Civil Defense Approved HVAC solutions across UAE.",
  keywords:
    "HVAC Sharjah, Cold Room Installation UAE,  Cold Storage Installation UAE, Kitchen Hood Installation Dubai, Refrigeration Services UAE, Chiller Maintenance Sharjah",
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
          <WhatsAppButton phoneNumber="971547425544" message="Hello! I'm interested in your business setup services." />
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
