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
                {/* <span
                    className="absolute top-3 right-6 w-96 aspect-square rounded-full bg-red-600"
                    // style={{
                    //     background: "#31453A",
                    //     boxShadow: `0 0 60rem 60rem #31453A`
                    // }}
                /> */}
				{/* <Navbar /> */}
				<div className="absolute z-10 w-screen h-screen">
					{children}
				</div>
			</body>
        </html>
    )
}

export default RootLayout