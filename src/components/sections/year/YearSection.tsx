import IconCard from "@/components/IconCard"
import type { YearType } from "@/lib/types"
import yearIcon from "@/assets/images/year.png"
import Image from "next/image"
import YearCard from "./YearCard"
import { scrollToSection } from "@/lib/utils"

interface YearSectionProps {
    sectionRef: React.RefObject<HTMLElement>
    nextSection: React.RefObject<HTMLElement>
    year: YearType
    setYear: (value: YearType) => void
}

const YearSection = ({ sectionRef, nextSection, year, setYear }: YearSectionProps) => {
	return (
		<section
			ref={sectionRef}
			className="w-full min-h-screen flex flex-col items-center justify-start gap-4 sm:gap-16 px-4 py-16 max-w-[900px] overflow-x-hidden"
		>
			<h2 className="text-4xl font-medium pt-12 pb-4 text-center">
                En quelle année a été fabriqué le véhicule ?
			</h2>
			<div className="flex flex-row flex-wrap items-center justify-center gap-8 relative mt-8">
				<YearCard
					year={year}
					setYear={setYear}
					onClick={() => scrollToSection(nextSection)}
				/>
				<IconCard className="absolute z-10 -right-16 sm:-right-24 -bottom-6 sm:-bottom-16">
					<Image src={yearIcon} alt="Year Icon" width={80} height={80} />
				</IconCard>
			</div>
		</section>
	)
}

export default YearSection