import energies from "@/assets/data/energies.json"
import EnergyCard from "./EnergyCard"
import { EnergyType } from "@/lib/types"
import { scrollToSection } from "@/lib/utils"
import { useEffect } from "react"

interface EnergySectionProps {
    sectionRef: React.RefObject<HTMLElement>
    nextSection: React.RefObject<HTMLElement>
    energy: EnergyType | null
    setEnergy: (value: EnergyType ) => void
}

const EnergySection = ({sectionRef, nextSection, energy, setEnergy}: EnergySectionProps) => {
    const updateEnergy = (value: EnergyType) => {
        setEnergy(value)
    }

    useEffect(() => {
        if (!energy) return
        const timeout = setTimeout(() => {
            scrollToSection(nextSection)
        }, 500)
        return () => clearTimeout(timeout)
    }, [energy])

    return (
        <section ref={sectionRef} className="w-full min-h-screen flex flex-col items-center justify-start gap-4 sm:gap-16 px-4 py-16 max-w-[900px]">
            <h2 className="text-4xl font-medium pt-12 pb-4 text-center">Quel est le type d'énergie que consomme le véhicule ?</h2>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch justify-center gap-8">
                {
                    energies.map(e => (
                        <EnergyCard key={e.id} energy={e} onClick={() => updateEnergy(e)} selected={energy === e} />
                    ))
                }
            </div>
        </section>
    )
}

export default EnergySection