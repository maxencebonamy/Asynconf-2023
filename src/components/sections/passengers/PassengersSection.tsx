/**
 * Section de sélection du nombre de passagers
 */

"use client"

import passengersData from "@/assets/data/passengers.json"
import type { PassengersType } from "@/lib/types"
import { scrollToSection } from "@/lib/utils"
import { useEffect } from "react"
import PassengerCard from "./PassengerCard"

interface PassengersSectionProps {
	// Référence qui va permettre de stocker ce composant
    sectionRef: React.RefObject<HTMLElement>
	// Référence de la section "suivante" (un bouton ici permet de scroll jusqu'à cette section)
    nextSection: React.RefObject<HTMLElement>
	// Nombre de passagers actuel (vient de l'état défini dans la page principale)
    passengers: PassengersType | null
	// Setter du nombre de passagers (vient de l'état défini dans la page principale)
    setPassengers: (value: PassengersType) => void
}

const PassengersSection = ({ sectionRef, nextSection, passengers, setPassengers }: PassengersSectionProps) => {
	const updatePassengers = (value: PassengersType) => {
		setPassengers(value)
	}

	// Le useEffect permet d'ajouter un délai avant de scroll, de manière à laisser l'animation de sélection de carte se jouer
	useEffect(() => {
		if (!passengers) return
		const timeout = setTimeout(() => {
			scrollToSection(nextSection)
		}, 500)
		// On renvoie une fonction qui clear ce qu'on a définit dans le useEffect
		return () => clearTimeout(timeout)
	}, [passengers])

	return (
		<section
			ref={sectionRef}
			className="w-full min-h-screen flex flex-col items-center justify-start gap-4 sm:gap-16 py-16 max-w-[900px]"
		>
			<h2 className="text-4xl font-medium pt-12 pb-4 text-center">
                En moyenne, combien de passagers seront présents dans le véhicule ?
			</h2>
			<div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-center gap-8">
				{
					passengersData.map(e => (
						<PassengerCard key={e.id} passengers={e} onClick={() => updatePassengers(e)} selected={passengers === e} />
					))
				}
			</div>
		</section>
	)
}

export default PassengersSection