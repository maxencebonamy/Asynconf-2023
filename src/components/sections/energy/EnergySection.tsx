/**
 * Section de sélection de l'énergie du véhicule
 */

"use client"

import energies from "@/assets/data/energies.json"
import EnergyCard from "./EnergyCard"
import type { EnergyType } from "@/lib/types"
import { scrollToSection } from "@/lib/utils"
import { useEffect } from "react"

interface EnergySectionProps {
	// Référence qui va permettre de stocker ce composant
    sectionRef: React.RefObject<HTMLElement>
	// Référence de la section "suivante" (un bouton ici permet de scroll jusqu'à cette section)
    nextSection: React.RefObject<HTMLElement>
	// Type d'énergie actuel (vient de l'état défini dans la page principale)
    energy: EnergyType | null
	// Setter du type d'énergie (vient de l'état défini dans la page principale)
    setEnergy: (value: EnergyType) => void
}

const EnergySection = ({ sectionRef, nextSection, energy, setEnergy }: EnergySectionProps) => {
	const updateEnergy = (value: EnergyType) => {
		setEnergy(value)
	}

	// Le useEffect permet d'ajouter un délai avant de scroll, de manière à laisser l'animation de sélection de carte se jouer
	useEffect(() => {
		if (!energy) return
		const timeout = setTimeout(() => {
			scrollToSection(nextSection)
		}, 500)
		// On renvoie une fonction qui clear ce qu'on a définit dans le useEffect
		return () => clearTimeout(timeout)
	}, [energy])

	return (
		<section
			ref={sectionRef}
			className="w-full min-h-screen flex flex-col items-center justify-start gap-4 sm:gap-16 px-4 py-16 max-w-[900px]"
		>
			<h2 className="text-4xl font-medium pt-12 pb-4 text-center">
				Quel est le type d'énergie que consomme le véhicule ?
			</h2>
			<div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-center gap-8">
				{
					energies.map(e => (
						<EnergyCard key={e.id} energy={e} onClick={() => updateEnergy(e)} selected={energy === e} />
					))
				}
			</div>
		</section>
	)
}

export default EnergySection