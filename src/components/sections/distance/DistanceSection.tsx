import distances from "@/assets/data/distances.json"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { DistanceType } from "@/lib/types"
import DistanceCard from "./DistanceCard"
import { scrollToSection } from "@/lib/utils"
import IconCard from "@/components/IconCard"
import distanceIcon from "@/assets/images/distance.png"
import Image from "next/image"

interface DistanceSectionProps {
    sectionRef: React.RefObject<HTMLElement>
    nextSection: React.RefObject<HTMLElement>
    distance: DistanceType
    setDistance: (value: DistanceType ) => void
}

const DistanceSection = ({sectionRef, nextSection, distance, setDistance}: DistanceSectionProps) => {
    return (
        <section ref={sectionRef} className="w-full h-screen flex flex-col items-center justify-start gap-16 p-8 max-w-[900px]">
            <h2 className="text-4xl font-medium pt-12 pb-4 text-center">
                Quelle est la distance moyenne annuelle que vous allez parcourir avec le véhicule ?
            </h2>
            <div className="flex flex-row flex-wrap items-center justify-center gap-8 relative mt-8">
                <DistanceCard
                    distance={distance}
                    setDistance={setDistance}
                    onClick={() => scrollToSection(nextSection)}
                />
                <IconCard className="absolute z-10 -left-24 -top-16">
                    <Image src={distanceIcon} alt="Distance Icon" width={100} height={100} />
                </IconCard>
                {/* {
                    distances.map(e => (
                        <Button key={e.id} onClick={() => updateDistance(e)}>{`${e.min} - ${e.max} km`}</Button>
                    ))
                }
                <Slider className="cursor-pointer w-1/2" defaultValue={[20, 400]} max={500} step={1} /> */}
            </div>
        </section>
    )
}

export default DistanceSection