import energies from "@/assets/data/energies.json"
import EnergyCard from "./EnergyCard"
import { EnergyType } from "@/lib/types"

interface EnergySectionProps {
    sectionRef: React.RefObject<HTMLElement>
    nextSection: React.RefObject<HTMLElement>
    energy: EnergyType | null
    setEnergy: (value: EnergyType ) => void
}

const EnergySection = ({sectionRef, nextSection, energy, setEnergy}: EnergySectionProps) => {
    const updateEnergy = (value: EnergyType) => {
        setEnergy(value)
        nextSection.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section ref={sectionRef} className="w-full h-screen flex flex-col items-center justify-center gap-16">
            <h2 className="text-3xl font-medium pb-4 text-center">Quel est le type d'énergie votre véhicule ?</h2>
            <div className="flex flex-row flex-wrap items-stretch justify-center gap-8">
                {
                    energies.map(e => (
                        <EnergyCard key={e.id} energy={e} onClick={() => updateEnergy(e)} />
                    ))
                }
            </div>
        </section>
    )
}

export default EnergySection