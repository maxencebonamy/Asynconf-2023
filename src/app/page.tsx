"use client"

import EnergySection from "@/components/sections/energy/EnergySection"
import HomeSection from "@/components/sections/home/HomeSection"
import CarSection from "@/components/sections/car/CarSection"
import { CarType, DistanceType, EnergyType, PassengersType, YearType } from "@/lib/types"
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
	const [car, setCar] = useState<CarType | null>(null)
	const [energy, setEnergy] = useState<EnergyType | null>(null)
	const [distance, setDistance] = useState<DistanceType>(getMiddleValue(distances))
	const [year, setYear] = useState<YearType>(getMiddleValue(years))
	const [passengers, setPassengers] = useState<PassengersType | null>(null)
	const [loanRate, setLoanRate] = useState<number | null>(null)

	const homeSection = useRef<HTMLElement>(null)
	const carSection = useRef<HTMLElement>(null)
	const energySection = useRef<HTMLElement>(null)
	const distanceSection = useRef<HTMLElement>(null)
	const yearSection = useRef<HTMLElement>(null)
	const passengersSection = useRef<HTMLElement>(null)
	const resultSection = useRef<HTMLElement>(null)

	useEffect(() => {
		if (!car || !energy || !distance || !year || !passengers) {
			setLoanRate(null)
			return
		}
		setLoanRate(cumputeLoanRate(car, energy, distance, year, passengers))
	}, [car, energy, distance, year, passengers])

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
