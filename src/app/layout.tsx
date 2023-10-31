import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ui/theme-provider"

const font = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Green Bank",
    description: "Calculez votre taux d'emprunt pour acheter votre véhicule."
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={cn(font.className, "overflow-x-hidden")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                >
                    <Navbar />
                    <div className="absolute z-10 w-screen h-screen">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout