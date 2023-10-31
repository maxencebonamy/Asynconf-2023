/**
 * Section Home (tout en haut)
 */

import { ArrowRight } from "lucide-react"
import CreditCard from "./CreditCard"
import ShadowButton from "@/components/ShadowButton"
import { scrollToSection } from "@/lib/utils"
import ShadowCircle from "@/components/ShadowCircle"

interface HomeSectionProps {
	// Référence qui va permettre de stocker ce composant
    sectionRef: React.RefObject<HTMLElement>
	// Référence de la section "suivante" (un bouton ici permet de scroll jusqu'à cette section)
    nextSection: React.RefObject<HTMLElement>
}

const HomeSection = ({ sectionRef, nextSection }: HomeSectionProps) => {
	return (
		<section ref={sectionRef} className="w-full h-screen flex flex-col items-center justify-center p-4">
			<div className="flex flex-col sm:flex-row items-center justify-center gap-12 lg:gap-24 xl:gap-56">
				<div className="flex flex-col items-center sm:items-start justify-center gap-4 sm:max-w-[500px]">
					<h1 className="text-5xl font-medium">
						Vous voulez acheter un véhicule ?
					</h1>
					<h3 className="text-2xl font-light">
						Calculez votre taux d'emprunt en seulement quelques clics.
					</h3>
				</div>
				<div className="relative">
					<CreditCard />
					<ShadowCircle shadowRadius={100} className="absolute z-10 top-1 left-1" />
					<ShadowCircle shadowRadius={100} className="absolute z-10 bottom-1 right-10" />
				</div>
			</div>
			<div className="absolute bottom-16 sm:bottom-24">
				<ShadowButton className="font-semibold h-12 rounded-xl text-lg px-6" onClick={() => scrollToSection(nextSection)}>
                    C'est parti
					<ArrowRight height={28} width={28} className="pl-2" />
				</ShadowButton>
			</div>
		</section>
	)
}

export default HomeSection