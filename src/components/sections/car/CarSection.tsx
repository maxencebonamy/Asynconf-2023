import cars from "@/assets/data/cars.json"
import CarCard from "./CarCard"
import { CarType } from "@/lib/types"
import { useEffect } from "react"
import { scrollToSection } from "@/lib/utils"

interface CarSectionProps {
    sectionRef: React.RefObject<HTMLElement>
    nextSection: React.RefObject<HTMLElement>
    car: CarType | null
    setCar: (value: CarType ) => void
}

const CarSection = ({sectionRef, nextSection, car, setCar}: CarSectionProps) => {
    const updateCar = (value: CarType) => {
        setCar(value)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            scrollToSection(nextSection)
        }, 500)
        return () => clearTimeout(timeout)
    }, [car])

    return (
        <section ref={sectionRef} className="w-full h-screen flex flex-col items-center justify-start gap-16 p-8">
            <h2 className="text-4xl font-medium pt-12 pb-4 text-center">Quel est le type du véhicule ?</h2>
            <div className="flex flex-row flex-wrap items-stretch justify-center gap-8 max-w-[800px]">
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