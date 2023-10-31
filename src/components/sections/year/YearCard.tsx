/**
 * Carte représentant une range d'années de fabrication
 */

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import type { YearType } from "@/lib/types"
import years from "@/assets/data/years.json"

interface YearCardProps {
	// Range d'année de fabrication
    year: YearType
	// Setter de la range d'année de fabrication
    setYear: (value: YearType) => void
	// Fonction appelée quand l'utilisateur clique sur le bouton "Continuer"
    onClick: () => void
}

const YearCard = ({ year, setYear, onClick } : YearCardProps) => {
	// Fonction qui sert à assigner à l'année actuelle une valeur du fichier json à aprtir de son id
	const updateYear = (id: number) => {
		const newYear = years.find(e => e.id === id)
		if (newYear) setYear(newYear)
	}

	return (
		<Card className="sm:w-[600px]">
			<CardHeader className="pb-2">
				<CardTitle className="text-2xl font-semibold text-center">Sélectionnez l'année</CardTitle>
			</CardHeader>

			<CardContent className="flex flex-col items-center justify-start py-12">
				<p className="text-md text-muted-foreground">
					{`Entre ${year.min} et ${year.max}`}
				</p>
				<Slider
					className="cursor-pointer h-8"
					step={1}
					max={years.length - 1}
					defaultValue={[year.id]}
					onValueChange={e => updateYear(e[0])}
					value={[year.id]}
				/>
			</CardContent>

			<CardFooter className="flex flex-row items-center justify-center pt-2">
				<Button onClick={onClick} className="font-semibold">
                    Continuer
				</Button>
			</CardFooter>
		</Card>
	)
}

export default YearCard