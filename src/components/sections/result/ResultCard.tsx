import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { DistanceType } from "@/lib/types"
import Image from "next/image"
import distances from "@/assets/data/distances.json"
import { useEffect } from "react"
import { formatNumberWithComma, formatNumberWithSeparators } from "@/lib/utils"

interface ResultCardProps {
    loanRate: number
}

const ResultCard = ({loanRate} : ResultCardProps) => {
    return (
        <Card className="sm:w-[600px]">
            <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-center">
                    Votre taux d'emprunt est de :
                </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-row items-center justify-center py-2">
                <p className="font-extrabold text-8xl">{formatNumberWithComma(loanRate)}</p>
                <p className="font-light text-8xl">%</p>
            </CardContent>

            <CardFooter className="flex flex-row items-center justify-center pt-2">
                <p className="text-md text-muted-foreground text-center">
                    {`Selon les informations que vous avez indiquées, vous devrez payer ${formatNumberWithComma(loanRate)}% de frais pour cet emprunt.`}
                </p>
            </CardFooter>
        </Card>
    )
}

export default ResultCard