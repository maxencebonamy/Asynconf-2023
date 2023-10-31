import passengersData from "@/assets/data/passengers.json"
import { Button } from "@/components/ui/button"
import { PassengersType } from "@/lib/types"
import { scrollToSection } from "@/lib/utils"
import { useEffect } from "react"
import PassengerCard from "./PassengerCard"

interface PassengersSectionProps {
    sectionRef: React.RefObject<HTMLElement>
    nextSection: React.RefObject<HTMLElement>
    passengers: PassengersType | null
    setPassengers: (value: PassengersType ) => void
}

const PassengersSection = ({sectionRef, nextSection, passengers, setPassengers}: PassengersSectionProps) => {
    const updatePassengers = (value: PassengersType) => {
        setPassengers(value)
    }

    useEffect(() => {
        if (!passengers) return
        const timeout = setTimeout(() => {
            scrollToSection(nextSection)
        }, 500)
        return () => clearTimeout(timeout)
    }, [passengers])

    return (
        <section ref={sectionRef} className="w-full min-h-screen flex flex-col items-center justify-start gap-4 sm:gap-16 py-16 max-w-[900px]">
            <h2 className="text-4xl font-medium pt-12 pb-4 text-center">
                Combien de passagers seront présents dans le véhicule en moyenne ?
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