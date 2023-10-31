import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatNumberTwoDecimals, formatNumberWithComma } from "@/lib/utils"

interface ResultCardProps {
    loanRate: number
}

const ResultCard = ({ loanRate } : ResultCardProps) => {
	const formattedLoanRate = formatNumberWithComma(formatNumberTwoDecimals(loanRate))

	return (
		<Card className="sm:w-[600px]">
			<CardHeader className="pb-2">
				<CardTitle className="text-2xl font-semibold text-center">
                    Votre taux d'emprunt est de :
				</CardTitle>
			</CardHeader>

			<CardContent className="flex flex-row items-center justify-center py-2">
				<p className="font-extrabold text-8xl">{formattedLoanRate}</p>
				<p className="font-light text-8xl">%</p>
			</CardContent>

			<CardFooter className="flex flex-row items-center justify-center pt-2">
				<p className="text-md text-muted-foreground text-center">
					{`Selon les informations que vous avez indiquées, vous devrez payer ${formattedLoanRate}% de frais pour cet emprunt.`}
				</p>
			</CardFooter>
		</Card>
	)
}

export default ResultCard