"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import Image from "next/image"
import type { EnergyType } from "@/lib/types"
import { cn } from "@/lib/utils"
import energyImages from "@/assets/images/energies/energyImages"

interface EnergyCardProps {
    energy: EnergyType
    onClick: () => void
    selected?: boolean
}

const EnergyCard = ({ energy, onClick, selected }: EnergyCardProps) => {
	return (
		<Card
			className={cn(
				"cursor-pointer w-56 transition-all duration-500 hover:bg-muted",
				selected ? "border-muted-foreground" : ""
			)}
			onClick={onClick}
		>
			<CardHeader className="pb-2">
				<CardTitle className="text-2xl font-semibold text-center">{energy.name}</CardTitle>
			</CardHeader>

			<CardContent className="flex flex-col items-center justify-start pt-2">
				<Image className="m-0 p-0" src={energyImages[energy.id]} alt={`${energy.name} icon`} width={120} height={120} />
			</CardContent>
		</Card>
	)
}

export default EnergyCard