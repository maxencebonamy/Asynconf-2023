import ShadowButton from "@/components/ShadowButton"
import { scrollToSection } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import ResultCard from "./ResultCard"
import IconCard from "@/components/IconCard"
import Image from "next/image"
import loadRateImage from "@/assets/images/loan_rate.png"

interface ResultSectionProps {
    sectionRef: React.RefObject<HTMLElement>
    nextSection: React.RefObject<HTMLElement>
    loanRate: number | null
    resetFields: () => void
}

const ResultSection = ({ sectionRef, nextSection, loanRate, resetFields }: ResultSectionProps) => {
	const onButtonClick = () => {
		resetFields()
		scrollToSection(nextSection)
	}

	return (
		<section
			ref={sectionRef}
			className="w-full h-screen flex flex-col items-center justify-start gap-4 sm:gap-16 px-4 py-16 max-w-[900px] overflow-x-hidden"
		>
			<h2 className="text-4xl font-medium pt-12 pb-4 text-center">
				{loanRate !== null ? "C'est déjà terminé !" : "Commencez par remplir les informations !"}
			</h2>
			{
				loanRate !== null ? (
					<div className="flex flex-row flex-wrap items-center justify-center gap-8 relative mt-8">
						<ResultCard loanRate={loanRate} />
						<IconCard className="absolute z-10 -right-12 sm:-right-24 -bottom-24 sm:-top-16 sm:bottom-auto">
							<Image src={loadRateImage} alt="Distance Icon" width={80} height={80} />
						</IconCard>
					</div>
				) : <></>
			}
			<ShadowButton className="font-semibold h-12 rounded-xl text-lg px-6 mt-24 sm:mt-4" onClick={onButtonClick}>
				{loanRate !== null ? "Recommencer" : "C'est parti"}
				<ArrowRight height={28} width={28} className="pl-2" />
			</ShadowButton>
		</section>
	)
}

export default ResultSection