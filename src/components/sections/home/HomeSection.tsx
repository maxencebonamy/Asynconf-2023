import { Button } from "../../ui/button"
import { ArrowRight } from "lucide-react"

interface HomeSectionProps {
    nextSection: React.RefObject<HTMLElement>
}

const HomeSection = ({nextSection}: HomeSectionProps) => {
    const ScrollToTypeSection = () => {
        nextSection.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section className="w-full h-screen flex flex-col items-center justify-center gap-16 py-28">
            <div className="flex flex-row items-center justify-center gap-16">
				<div className="flex flex-col items-start justify-center gap-4">
					<h1 className="text-5xl font-medium">
						Vous voulez acheter<br />un véhicule ?
					</h1>
					<h3 className="text-2xl font-light">
						Calculez votre taux d'emprunt en<br />seulement quelques clics.
					</h3>
				</div>
			</div>
			<div className="">
                <Button className="font-semibold" onClick={ScrollToTypeSection}>
                    Essayer
                    <ArrowRight height={20} />
                </Button>
			</div>
        </section>
    )
}

export default HomeSection