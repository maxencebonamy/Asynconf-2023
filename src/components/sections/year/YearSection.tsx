import years from "@/assets/data/years.json"
import { Button } from "@/components/ui/button"
import { YearType } from "@/lib/types"

interface YearSectionProps {
    sectionRef: React.RefObject<HTMLElement>
    nextSection: React.RefObject<HTMLElement>
    year: YearType | null
    setYear: (value: YearType ) => void
}

const YearSection = ({sectionRef, nextSection, year, setYear}: YearSectionProps) => {
    const updateYear = (value: YearType) => {
        setYear(value)
        nextSection.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section ref={sectionRef} className="w-full h-screen flex flex-col items-center justify-center gap-16">
            <h2 className="text-3xl font-medium pb-4 text-center">En quelle année a été fabriqué votre véhicule ?</h2>
            <div className="flex flex-row flex-wrap items-stretch justify-center gap-8">
                {
                    (years as YearType[]).map(e => (
                        <Button key={e.id} onClick={() => updateYear(e)}>{`${e.min} - ${e.max}`}</Button>
                    ))
                }
            </div>
        </section>
    )
}

export default YearSection