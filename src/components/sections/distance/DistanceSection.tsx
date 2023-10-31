/**
 * Section de sélection de la distance parcourue
 */

import type { DistanceType } from "@/lib/types"
import DistanceCard from "./DistanceCard"
import { scrollToSection } from "@/lib/utils"
import IconCard from "@/components/IconCard"
import distanceIcon from "@/assets/images/distance.png"
import Image from "next/image"

interface DistanceSectionProps {
	// Référence qui va permettre de stocker ce composant
    sectionRef: React.RefObject<HTMLElement>
	// Référence de la section "suivante" (un bouton ici permet de scroll jusqu'à cette section)
    nextSection: React.RefObject<HTMLElement>
	// Range de distance parcourue actuelle (vient de l'état défini dans la page principale)
    distance: DistanceType
	// Setter de la range de distance parcourue (vient de l'état défini dans la page principale)
    setDistance: (value: DistanceType) => void
}

const DistanceSection = ({ sectionRef, nextSection, distance, setDistance }: DistanceSectionProps) => {
	return (
		<section
			ref={sectionRef}
			className="w-full min-h-screen flex flex-col items-center justify-start gap-4 sm:gap-16 px-4 py-16 max-w-[900px] overflow-x-hidden"
		>
			<h2 className="text-4xl font-medium pt-12 pb-4 text-center">
                Quelle est la distance moyenne annuelle que vous allez parcourir avec le véhicule ?
			</h2>
			<div className="flex flex-row flex-wrap items-center justify-center gap-8 relative mt-8">
				<DistanceCard
					distance={distance}
					setDistance={setDistance}
					onClick={() => scrollToSection(nextSection)}
				/>
				<IconCard className="absolute z-10 -left-10 sm:-left-24 -bottom-14 sm:-top-16 sm:bottom-auto">
					<Image src={distanceIcon} alt="Distance Icon" width={80} height={80} />
				</IconCard>
			</div>
		</section>
	)
}

export default DistanceSection