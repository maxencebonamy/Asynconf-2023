"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import Image from "next/image"
import carImages from "@/assets/images/cars/carImages"
import type { CarType } from "@/lib/types"
import { cn } from "@/lib/utils"

interface CarCardProps {
    car: CarType
    onClick: () => void
    selected?: boolean
}

const CarCard = ({ car, onClick, selected }: CarCardProps) => {
	return (
		<Card
			className={cn(
				"cursor-pointer sm:w-96 transition-all duration-500 hover:bg-muted",
				selected ? "border-muted-foreground" : ""
			)}
			onClick={onClick}
		>
			<CardHeader className="pb-2">
				<CardTitle className="text-2xl font-semibold text-center">{car.name}</CardTitle>
				<CardDescription className="text-md text-center">
					{`Le véhicule pèse entre ${car.minWeight}kg et ${car.maxWeight}kg.`}
				</CardDescription>
			</CardHeader>

			<CardContent className="flex flex-col items-center justify-start pt-2">
				<Image className="m-0 p-0" src={carImages[car.id]} alt={`${car.name} icon`} width={150} height={150} />
			</CardContent>
		</Card>
	)
}

export default CarCard