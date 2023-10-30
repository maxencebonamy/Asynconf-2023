import distances from "@/assets/data/distances.json"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { DistanceType } from "@/lib/types"

interface DistanceSectionProps {
    sectionRef: React.RefObject<HTMLElement>
    nextSection: React.RefObject<HTMLElement>
    distance: DistanceType | null
    setDistance: (value: DistanceType ) => void
}

const DistanceSection = ({sectionRef, nextSection, distance, setDistance}: DistanceSectionProps) => {
    const updateDistance = (value: DistanceType) => {
        setDistance(value)
        nextSection.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section ref={sectionRef} className="w-full h-screen flex flex-col items-center justify-center gap-16">
            <h2 className="text-3xl font-medium pb-4 text-center">Combien de distance avez-vous parcouru avec votre véhicule ?</h2>
            <div className="flex flex-row flex-wrap items-stretch justify-center gap-8">
                {
                    distances.map(e => (
                        <Button key={e.id} onClick={() => updateDistance(e)}>{`${e.min} - ${e.max} km`}</Button>
                    ))
                }
                <Slider className="cursor-pointer w-1/2" defaultValue={[20, 400]} max={500} step={1} />
                {
                    
                }
            </div>
        </section>
    )
}

export default DistanceSection