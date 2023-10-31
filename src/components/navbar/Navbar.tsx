/**
 * Barre de navigation de l'application (qui contient l'icône ainsi que le "toggle" du thème)
 */

"use client"

import Image from "next/image"
import { ModeToggle } from "./ModeToggle"
import Link from "next/link"
import { useTheme } from "next-themes"
import logoLight from "@/assets/logo_light.png"
import logoDark from "@/assets/logo_dark.png"

const Navbar = () => {
	// Le thème sert à afficher le logo clair ou foncé (clair si le thème est foncé et inversement)
	const { theme } = useTheme()

	return (
		<nav className="fixed z-20 w-full h-16 p-8 flex flex-row items-center justify-between background-blur border-b-2">
			<Link href="/" className="transition-opacity opacity-70 hover:opacity-90">
				<Image
					src={theme === "light" ? logoDark : logoLight}
					alt="Logo"
					width={32}
					height={32}
				/>
			</Link>
			<ModeToggle />
		</nav>
	)
}

export default Navbar