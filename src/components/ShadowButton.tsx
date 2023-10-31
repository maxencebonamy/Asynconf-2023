/**
 * Bouton Shadcn/ui mais avec une ombre tout autour, qui grossit lorsque l'utilisateur passe son curseur par dessus le bouton
 */

"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

// Couleur de l'ombre (ici la même que la couleur de fond)
const SHADOW_COLOR = "#22b357"
// Valeurs minimale et maximale du rayon de l'ombre (minimale par défaut et maximale quand l'utilisateur met son curseur sur le bouton)
const MIN_SHDAOW_RADIUS = 4
const MAX_SHADOW_RADIUS = 8

interface ShadowButtonProps {
	// Enfant (en général le texte du bouton)
    children: React.ReactNode
	// Classes pour update le style avec Tailwind
    className?: string
	// Fonction appelée lorsque l'utilisateur clique sur le bouton
    onClick?: () => void
}

const ShadowButton = ({ children, className, onClick }: ShadowButtonProps) => {

	// Ombre (état + style), comme c'est un état, le style se remet à jour dès que sa valeur change
	// (en réalité la fonction est rappelée à chaque changement d'état)
	const [shadowRadius, setShadowRadius] = useState(MIN_SHDAOW_RADIUS)

	const style = {
		boxShadow: `0 0 ${shadowRadius * 4}px ${shadowRadius}px ${SHADOW_COLOR}`
	}

	return (
		<Button
			className={cn("transition-shadow duration-500", className ?? "")}
			style={style}
			onMouseEnter={() => setShadowRadius(MAX_SHADOW_RADIUS)}
			onMouseLeave={() => setShadowRadius(MIN_SHDAOW_RADIUS)}
			onClick={onClick ?? (() => {})}
		>
			{children}
		</Button>
	)
}

export default ShadowButton