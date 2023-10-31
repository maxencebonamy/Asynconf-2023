/**
 * Carte dont la taille est adaptée pour accueillir une icône, et qui a l'effet "Tilt"
 */

import { Card } from "./ui/card"
import Tilt from "react-parallax-tilt"
import { useTheme } from "next-themes"

interface IconCardProps {
	// Classes pour update le style avec Tailwind
    className?: string
	// Enfant (en général une icône)
    children: React.ReactNode
}

const IconCard = ({ className, children } : IconCardProps) => {
	// Le thème sert à changer la couleur de l'effet "glare" du Tilt (une sorte de reflet par dessus la carte)
	// Donc thème clair -> reflet noir, et inversement
	const { theme } = useTheme()

	return (
		<Tilt
			tiltReverse
			glareEnable
			glareColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
			glarePosition="all"
			glareBorderRadius="12px"
			className={className ?? ""}
		>
			<Card className="p-6">
				{children}
			</Card>
		</Tilt>
	)
}

export default IconCard