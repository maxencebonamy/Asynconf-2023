import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils"

const font = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Green Bank",
    description: "Calculez votre taux d'emprunt pour acheter votre véhicule."
}

const RootLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <html lang="en" className="dark">
            <body className={cn(font.className, "overflow-x-hidden")}>
				{/* <Navbar /> */}
				<div className="absolute z-10 w-screen h-screen">
					{children}
				</div>
			</body>
        </html>
    )
}

export default RootLayout