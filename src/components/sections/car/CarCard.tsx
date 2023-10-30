"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card"
import Image from "next/image"
import carImages from "@/assets/images/cars/carImages"
import { CarType } from "@/lib/types"

interface CarCardProps {
    car: CarType
    onClick: () => void
}

const CarCard = ({ car, onClick }: CarCardProps) => {
    return (
        <Card className="cursor-pointer bg-transparent background-blur w-4/12" onClick={onClick}>
            <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-center">{car.name}</CardTitle>
                <CardDescription className="text-md text-center">
                    {`Votre véhicule pèse entre ${car.minWeight}kg et ${car.maxWeight}kg.`}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center justify-start pt-2">
                <Image className="m-0 p-0" src={carImages[car.id]} alt={`${car.name} icon`} width={180} height={180} />
            </CardContent>
        </Card>
    )
}

export default CarCard