interface ResultSectionProps {
    sectionRef: React.RefObject<HTMLElement>
    loanRate: number | null
}

const ResultSection = ({sectionRef, loanRate}: ResultSectionProps) => {
    return (
        <section ref={sectionRef} className="w-full h-screen flex flex-col items-center justify-center gap-16 py-28">
            <div className="flex flex-row items-center justify-center gap-16">
				<div className="flex flex-col items-start justify-center gap-4">
					<h1 className="text-5xl font-medium">
						Résultats
					</h1>
				</div>
			</div>
			<div className="">
                {loanRate ?? "Form non terminé"}
			</div>
        </section>
    )
}

export default ResultSection