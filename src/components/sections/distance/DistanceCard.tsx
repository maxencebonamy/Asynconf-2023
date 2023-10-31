/**
 * Carte représentant une range de distances parcourues
 */

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import type { DistanceType } from "@/lib/types"
import distances from "@/assets/data/distances.json"
import { formatNumberWithSeparators } from "@/lib/utils"

interface DistanceCardProps {
	// Range de distance parcourue
    distance: DistanceType
	// Setter de la range de distance parcourue
    setDistance: (value: DistanceType) => void
	// Fonction appelée quand l'utilisateur clique sur le bouton "Continuer"
    onClick: () => void
}

const DistanceCard = ({ distance, setDistance, onClick } : DistanceCardProps) => {
	// Fonction qui sert à assigner à la distance actuelle une valeur du fichier json à aprtir de son id
	const updateDistance = (id: number) => {
		const newDistance = distances.find(e => e.id === id)
		if (newDistance) setDistance(newDistance)
	}

	return (
		<Card className="sm:w-[600px]">
			<CardHeader className="pb-2">
				<CardTitle className="text-2xl font-semibold text-center">Sélectionnez la distance</CardTitle>
			</CardHeader>

			<CardContent className="flex flex-col items-center justify-start py-12">
				<p className="text-md text-muted-foreground">
					{`Entre ${formatNumberWithSeparators(distance.min)} et ${formatNumberWithSeparators(distance.max)} km`}
				</p>
				<Slider
					className="cursor-pointer h-8"
					step={1} max={distances.length - 1}
					defaultValue={[distance.id]}
					onValueChange={e => updateDistance(e[0])}
					value={[distance.id]}
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

export default DistanceCard