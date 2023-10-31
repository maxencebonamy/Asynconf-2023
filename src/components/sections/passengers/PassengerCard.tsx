/**
 * Carte représentant un nombre de passagers
 */

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import Image from "next/image"
import type { PassengersType } from "@/lib/types"
import { cn } from "@/lib/utils"
import passengersImages from "@/assets/images/passengers/passengersImages"

interface PassengerCardProps {
	// Nombre de passagers
    passengers: PassengersType
	// Fonction appelée quand l'utilisateur clique sur la carte
    onClick: () => void
	// Booleen qui indique si la carte est sélectionnée ou non (si c'est le cas la bordure sera plus prononcée)
    selected?: boolean
}

const PassengerCard = ({ passengers, onClick, selected }: PassengerCardProps) => {
	return (
		<Card
			className={cn(
				"cursor-pointer sm:w-96 transition-all duration-500 hover:bg-muted",
				selected ? "border-muted-foreground" : ""
			)}
			onClick={onClick}
		>
			<CardHeader className="pb-2">
				<CardTitle className="text-2xl font-semibold text-center">{passengers.name}</CardTitle>
			</CardHeader>

			<CardContent className="flex flex-col items-center justify-start pt-4 pb-0 px-0">
				<Image
					className="m-0 p-0 h-28 w-auto"
					src={passengersImages[passengers.id]}
					alt={`${passengers.nbPassengers} passengers icon`}
					height={120}
					width={384}
				/>
			</CardContent>
		</Card>
	)
}

export default PassengerCard