/**
 * Section de sélection du type de véhicule
 */

"use client"

import cars from "@/assets/data/cars.json"
import CarCard from "./CarCard"
import type { CarType } from "@/lib/types"
import { useEffect } from "react"
import { scrollToSection } from "@/lib/utils"

interface CarSectionProps {
	// Référence qui va permettre de stocker ce composant
    sectionRef: React.RefObject<HTMLElement>
	// Référence de la section "suivante" (un bouton ici permet de scroll jusqu'à cette section)
    nextSection: React.RefObject<HTMLElement>
	// Type de voiture actuel (vient de l'état défini dans la page principale)
    car: CarType | null
	// Setter du type de voiture (vient de l'état défini dans la page principale)
    setCar: (value: CarType) => void
}

const CarSection = ({ sectionRef, nextSection, car, setCar }: CarSectionProps) => {
	const updateCar = (value: CarType) => {
		setCar(value)
	}

	// Le useEffect permet d'ajouter un délai avant de scroll, de manière à laisser l'animation de sélection de carte se jouer
	useEffect(() => {
		if (!car) return
		const timeout = setTimeout(() => {
			scrollToSection(nextSection)
		}, 500)
		// On renvoie une fonction qui clear ce qu'on a définit dans le useEffect
		return () => clearTimeout(timeout)
	}, [car])

	return (
		<section ref={sectionRef} className="w-full min-h-screen flex flex-col items-center justify-start gap-4 sm:gap-16 px-4 py-16 max-w-[900px]">
			<h2 className="text-4xl font-medium pt-12 pb-4 text-center">Quel est le type du véhicule ?</h2>
			<div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-center gap-8">
				{
					cars.map(e => (
						<CarCard key={e.id} car={e} onClick={() => updateCar(e)} selected={car === e} />
					))
				}
			</div>
		</section>
	)
}

export default CarSection