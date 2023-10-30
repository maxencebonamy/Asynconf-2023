import cars from "@/assets/data/cars.json"
import CarCard from "./CarCard"
import { CarType } from "@/lib/types"

interface CarSectionProps {
    sectionRef: React.RefObject<HTMLElement>
    nextSection: React.RefObject<HTMLElement>
    car: CarType | null
    setCar: (value: CarType ) => void
}

const CarSection = ({sectionRef, nextSection, car, setCar}: CarSectionProps) => {
    const updateCar = (value: CarType) => {
        setCar(value)
        nextSection.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section ref={sectionRef} className="w-full h-screen flex flex-col items-center justify-center gap-16">
            <h2 className="text-3xl font-medium pb-4 text-center">Quel est le type de votre véhicule ?</h2>
            <div className="flex flex-row flex-wrap items-stretch justify-center gap-8">
                {
                    cars.map(e => (
                        <CarCard key={e.id} car={e} onClick={() => updateCar(e)} />
                    ))
                }
            </div>
        </section>
    )
}

export default CarSection