/**
 * Carte de crédit affichée dans la seciton Home
 */

import creditCard from "@/assets/images/credit_card/cerdit_card.png"
import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"
import Image from "next/image"
import Tilt from "react-parallax-tilt"

const CreditCard = () => {
	// Le thème sert à afficher la carte avec un fond sombre si le thème est clair et inversement
	const { theme } = useTheme()

	// J'utilise ici des classes CSS que j'ai écrites dans le fichier "globals.css" : background-blur & background-gradient
	return (
		<Tilt
			tiltReverse
			glareEnable
			glareColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
			glarePosition="all"
			className="relative z-20"
			glareBorderRadius="12px"
		>
			<Card className="w-fit h-fit background-blur background-gradient bg-transparent border-muted-foreground">
				<Image className="aspect-auto w-96" src={creditCard} alt="Credit Card" width={500} height={200} />
			</Card>
		</Tilt>
	)
}

export default CreditCard