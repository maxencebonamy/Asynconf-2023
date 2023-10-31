import cars from "@/assets/data/cars.json"
import CarCard from "./CarCard"
import type { CarType } from "@/lib/types"
import { useEffect } from "react"
import { scrollToSection } from "@/lib/utils"

interface CarSectionProps {
    sectionRef: React.RefObject<HTMLElement>
    nextSection: React.RefObject<HTMLElement>
    car: CarType | null
    setCar: (value: CarType) => void
}

const CarSection = ({ sectionRef, nextSection, car, setCar }: CarSectionProps) => {
	const updateCar = (value: CarType) => {
		setCar(value)
	}

	useEffect(() => {
		if (!car) return
		const timeout = setTimeout(() => {
			scrollToSection(nextSection)
		}, 500)
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