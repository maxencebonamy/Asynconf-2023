/**
 * Page principale
 */

// Directive qui sert à indiquer au framework qu'on est dans un composant "client-side".
"use client"
// Pour faire simple, cela signifie qu'il va s'exécuter côté client et par conséquent,
// tous les composants à l'intérieur de cette page aussi.
// Or, NextJs permet de travailler avec des server-side component (qui s'éxecutent côté serveur),
// c'est en général plus optimisé donc une piste d'amélioration de mon code pourrait être d'essayer
// de ne pas faire de cette page un client-side component.
// Ici je n'ai pas le choix car j'ai des états et des références, mais il est tout à fait possible
// de refactoriser le code pour éviter cela (à améliorer...)

import EnergySection from "@/components/sections/energy/EnergySection"
import HomeSection from "@/components/sections/home/HomeSection"
import CarSection from "@/components/sections/car/CarSection"
import type { CarType, DistanceType, EnergyType, PassengersType, YearType } from "@/lib/types"
import { useEffect, useRef, useState } from "react"
import DistanceSection from "@/components/sections/distance/DistanceSection"
import YearSection from "@/components/sections/year/YearSection"
import PassengersSection from "@/components/sections/passengers/PassengersSection"
import { cumputeLoanRate } from "@/lib/algorithm"
import ResultSection from "@/components/sections/result/ResultSection"
import distances from "@/assets/data/distances.json"
import years from "@/assets/data/years.json"
import { getMiddleValue } from "@/lib/utils"

const Page = () => {
	// Propriétés entrées par l'utilisateur
	// Les propriétés sous forme de cartes (car, energy et passengers) n'ont pas de valeur par défaut
	// Les propriétés sous forme de "slider" (distance, year) ont le "milieu" des valeurs possibles en valeur par défaut
	const [car, setCar] = useState<CarType | null>(null)
	const [energy, setEnergy] = useState<EnergyType | null>(null)
	const [distance, setDistance] = useState<DistanceType>(getMiddleValue(distances))
	const [year, setYear] = useState<YearType>(getMiddleValue(years))
	const [passengers, setPassengers] = useState<PassengersType | null>(null)
	// Le taux d'emprunt qui sera affiché à la fin (calculé avec le useEffect plus loin)
	const [loanRate, setLoanRate] = useState<number | null>(null)

	// Sections de la page (références qui servent à pouvoir scroll dessus)
	const homeSection = useRef<HTMLElement>(null)
	const carSection = useRef<HTMLElement>(null)
	const energySection = useRef<HTMLElement>(null)
	const distanceSection = useRef<HTMLElement>(null)
	const yearSection = useRef<HTMLElement>(null)
	const passengersSection = useRef<HTMLElement>(null)
	const resultSection = useRef<HTMLElement>(null)

	// Mise à jour du taux d'emprunt à chaque mise à jour d'une des propriétés (à condition qu'elles soient toutes non nulles)
	useEffect(() => {
		if (!car || !energy || !distance || !year || !passengers) {
			setLoanRate(null)
			return
		}
		setLoanRate(cumputeLoanRate(car, energy, distance, year, passengers))
	}, [car, energy, distance, year, passengers])

	// Fonction qui permet de remettre les valeurs par défaut aux propriétés
	const resetFields = () => {
		setCar(null)
		setEnergy(null)
		setDistance(getMiddleValue(distances))
		setYear(getMiddleValue(years))
		setPassengers(null)
	}

	return (
		<main className="w-full flex flex-col items-center justify-center gap-16">
			<HomeSection
				sectionRef={homeSection}
				nextSection={carSection}
			/>

			<CarSection
				sectionRef={carSection}
				nextSection={energySection}
				car={car}
				setCar={setCar}
			/>

			<EnergySection
				sectionRef={energySection}
				nextSection={distanceSection}
				energy={energy}
				setEnergy={setEnergy}
			/>

			<DistanceSection
				sectionRef={distanceSection}
				nextSection={yearSection}
				distance={distance}
				setDistance={setDistance}
			/>

			<YearSection
				sectionRef={yearSection}
				nextSection={passengersSection}
				year={year}
				setYear={setYear}
			/>

			<PassengersSection
				sectionRef={passengersSection}
				nextSection={resultSection}
				passengers={passengers}
				setPassengers={setPassengers}
			/>

			<ResultSection
				sectionRef={resultSection}
				nextSection={homeSection}
				loanRate={loanRate}
				resetFields={resetFields}
			/>
		</main>
	)
}

export default Page