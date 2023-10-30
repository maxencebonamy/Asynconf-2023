import passengersData from "@/assets/data/passengers.json"
import { Button } from "@/components/ui/button"
import { PassengersType } from "@/lib/types"

interface PassengersSectionProps {
    sectionRef: React.RefObject<HTMLElement>
    nextSection: React.RefObject<HTMLElement>
    passengers: PassengersType | null
    setPassengers: (value: PassengersType ) => void
}

const PassengersSection = ({sectionRef, nextSection, passengers, setPassengers}: PassengersSectionProps) => {
    const updatePassengers = (value: PassengersType) => {
        setPassengers(value)
        nextSection.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section ref={sectionRef} className="w-full h-screen flex flex-col items-center justify-center gap-16">
            <h2 className="text-3xl font-medium pb-4 text-center">Combien de passagers accueillez-vous en moyenne dans votre véhicule ?</h2>
            <div className="flex flex-row flex-wrap items-stretch justify-center gap-8">
                {
                    passengersData.map(e => (
                        <Button key={e.id} onClick={() => updatePassengers(e)}>{`${e.nbPassengers}`}</Button>
                    ))
                }
            </div>
        </section>
    )
}

export default PassengersSection