import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { DistanceType } from "@/lib/types"
import Image from "next/image"
import distances from "@/assets/data/distances.json"
import { useEffect } from "react"
import { formatNumberWithSeparators } from "@/lib/utils"

interface DistanceCardProps {
    distance: DistanceType
    setDistance: (value: DistanceType) => void
    onClick: () => void
}

const DistanceCard = ({distance, setDistance, onClick} : DistanceCardProps) => {
    const updateDistance = (id: number) => {
        const newDistance = distances.find(e => e.id === id)
        if (newDistance) setDistance(newDistance)
    }

    return (
        <Card className="w-[600px]">
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