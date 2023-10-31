import type { CarType, EnergyType, DistanceType, YearType, PassengersType } from "./types"

import loanRates from "@/assets/data/loan_rates.json"

/**
 * Arrondir une valeur à l'entier le plus proche (sauf dans le cas ou la partie décimale est 0.5, ça arrondit en dessous)
 * Exemple : 12.50 renverra 12 et 12.51 renverra 13
 * @param value Nombre flottant initial
 * @returns Nombre entier arrondi
 */
const round = (value: number): number => {
	const integerPart = Math.floor(value)
	const decimalPart = value - integerPart

	if (decimalPart < 0.5) {
		return integerPart
	}
	return integerPart + 1
}

/**
 * Calcule le score du véhicule (première partie de l'algorithme)
 * @param car Type de voiture
 * @param energy Type d'énergie
 * @param distance Distance parcourue par an
 * @param year Année de fabrication
 * @returns Score du véhicule
 */
const computeScore = (
	car: CarType, energy: EnergyType, distance: DistanceType, year: YearType
): number => {
	return car.mark + energy.mark + distance.mark + year.mark
}

/**
 * Calcule le taux d'emprunt en fonction des 5 paramètres entrés par l'utilisateur
 * Le score est calculé en interne, de manière à ce qu'on ait juste besoin d'appeler cette fonction pour calculer le taux final
 * @param car Type de voiture
 * @param energy Type d'énergie
 * @param distance Distance parcourue par an
 * @param year Année de fabrication
 * @param passengers Nombre de passagers
 * @returns Taux d'emprunt final
 */
export const cumputeLoanRate = (
	car: CarType, energy: EnergyType, distance: DistanceType, year: YearType, passengers: PassengersType
) => {
	// Calcul du score avec les 4 premiers paramètres
	const score = computeScore(car, energy, distance, year)
	// Arrondir le score selon les règles définies (elles sont reprécisées dans la doc de la fonction round)
	const roundedScore = round(score)

	// Obtenir le taux d'emprunt en fonction du score
	let loanRate = loanRates.find(e => e.scoreMin <= roundedScore && roundedScore <= e.scoreMax)?.rate
	if (!loanRate) throw `Aucun taux d'emprunt défini pour le score arrondi de ${roundedScore}.`

	// Ajout du bonus (ou malus si négatif) de taux en fonction du nombre de passagers
	loanRate += passengers.extra

	return loanRate
}