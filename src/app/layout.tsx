import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ui/theme-provider"

// Typographie utilisée dans toute l'application
const font = Montserrat({ subsets: ["latin"] })

// Métadonnées de la page
// L'icône se met automatiquement avec NextJS du moment qu'il est appelé "favicon.ico" et qu'il est à la racine de app
export const metadata: Metadata = {
	title: "Green Bank",
	description: "Calculez votre taux d'emprunt pour acheter votre véhicule."
}

// Layout de l'app qui englobe tout le reste (ici children correspond donc à la page)
// Le ThemeProvider sert à pouvoir utiliser le hook "useTheme()" et donc à changer le thème plus facilement
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