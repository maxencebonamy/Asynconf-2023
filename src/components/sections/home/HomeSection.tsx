import { Button } from "../../ui/button"
import { ArrowRight } from "lucide-react"
import CreditCard from "./CreditCard"
import ShadowButton from "@/components/ShadowButton"
import { scrollToSection } from "@/lib/utils"

interface HomeSectionProps {
    nextSection: React.RefObject<HTMLElement>
}

const HomeSection = ({nextSection}: HomeSectionProps) => {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center gap-16 py-28">
            <div className="flex flex-row items-center justify-center gap-56">
				<div className="flex flex-col items-start justify-center gap-4">
					<h1 className="text-5xl font-medium">
						Vous voulez acheter<br />un véhicule ?
					</h1>
					<h3 className="text-2xl font-light">
						Calculez votre taux d'emprunt en<br />seulement quelques clics.
					</h3>
				</div>
                <CreditCard />
			</div>
			<div className="absolute bottom-24">
                <ShadowButton className="font-bold h-12 rounded-xl text-lg" onClick={() => scrollToSection(nextSection)}>
                    Essayer
                    <ArrowRight height={20} />
                </ShadowButton>
			</div>
        </section>
    )
}

export default HomeSection