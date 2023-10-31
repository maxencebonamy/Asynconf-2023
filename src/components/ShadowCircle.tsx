/**
 * Forme circulaire avec une ombre sur les côtés pour donner une impression de gradient radial
 */

import { cn } from "@/lib/utils"

// Couleur de l'ombre (ici la même que l'intérieur du cercle)
const SHADOW_COLOR = "#22b357"

interface ShadowCircleProps {
	// Classes pour update le style avec Tailwind
    className?: string
	// Rayon de l'ombre autour du cercle
    shadowRadius: number
}

const ShadowCircle = ({ className, shadowRadius }: ShadowCircleProps) => {
	return (
		<span
			className={cn("rounded-full bg-primary w-0 h-0", className ?? "")}
			style={{ boxShadow: `0 0 ${shadowRadius * 1}px ${shadowRadius}px ${SHADOW_COLOR}` }}
		/>
	)
}

export default ShadowCircle