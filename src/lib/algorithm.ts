import type { CarType, EnergyType, DistanceType, YearType, PassengersType } from "./types"

import loanRates from "@/assets/data/loan_rates.json"

const round = (value: number): number => {
	const integerPart = Math.floor(value)
	const decimalPart = value - integerPart

	if (decimalPart < 0.5) {
		return integerPart
	}
	return integerPart + 1
}

const computeScore = (
	car: CarType, energy: EnergyType, distance: DistanceType, year: YearType
): number => {
	return car.mark + energy.mark + distance.mark + year.mark
}

export const cumputeLoanRate = (
	car: CarType, energy: EnergyType, distance: DistanceType, year: YearType, passengers: PassengersType
) => {
	const score = computeScore(car, energy, distance, year)
	const roundedScore = round(score)

	let loanRate = loanRates.find(e => e.scoreMin <= roundedScore && roundedScore <= e.scoreMax)?.rate
	if (!loanRate) return null

	loanRate += passengers.extra
	return loanRate
}