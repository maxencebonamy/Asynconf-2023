/**
 * Toggle du thème : permet de changer le thème (enable = dark, disable = light)
 */

"use client"

import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"


export function ModeToggle() {
	const { theme, setTheme } = useTheme()

	// On change le thème à chaque appui sur le toggle
	return (
		<Switch onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")} defaultChecked={true} />
	)
}