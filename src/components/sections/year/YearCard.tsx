import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { YearType } from "@/lib/types"
import years from "@/assets/data/years.json"

interface YearCardProps {
    year: YearType
    setYear: (value: YearType) => void
    onClick: () => void
}

const YearCard = ({year, setYear, onClick} : YearCardProps) => {
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