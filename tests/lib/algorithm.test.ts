import { cumputeLoanRate } from "@/lib/algorithm"

import cars from "@/assets/data/cars.json"
import energies from "@/assets/data/energies.json"
import distances from "@/assets/data/distances.json"
import years from "@/assets/data/years.json"
import passengers from "@/assets/data/passengers.json"

import type { CarType, DistanceType, EnergyType, PassengersType, YearType } from "@/lib/types"

// Il y a en tout 2400 possibilités !
test("L'algorithme fonctionne correctement pour quelques cas au hasard.", () => {
	// Les fonctions ci-dessous ne sont pas type-safe, ça évite de gérer le cas undefined qui devient inutile dans des tests
	const getCar = (id: string): CarType => cars.find(e => e.id === id) as CarType
	const getEnergy = (id: string): EnergyType => energies.find(e => e.id === id) as EnergyType
	const getDistance = (id: number): DistanceType => distances.find(e => e.id === id) as DistanceType
	const getYear = (id: number): YearType => years.find(e => e.id === id) as YearType
	const getPassengers = (id: number): PassengersType => passengers.find(e => e.id === id) as PassengersType

	// Attention pour le nombre de passagers : l'id correspond à ce nombre - 1 à chaque fois (ex: un id de 2 correpond à 3 passagers)

	// Tests de l'énoncé
	expect(cumputeLoanRate(getCar("citadine"), getEnergy("electrique"), getDistance(4), getYear(4), getPassengers(0))).toBe(2.63)
	expect(cumputeLoanRate(getCar("citadine"), getEnergy("hybride"), getDistance(0), getYear(5), getPassengers(3))).toBe(1.57)
	expect(cumputeLoanRate(getCar("cabriolet"), getEnergy("diesel"), getDistance(1), getYear(3), getPassengers(1))).toBe(2.35)

	// Autres tests
	expect(cumputeLoanRate(getCar("berline"), getEnergy("hybride"), getDistance(4), getYear(4), getPassengers(0))).toBe(2.63)
	expect(cumputeLoanRate(getCar("suv"), getEnergy("essence"), getDistance(0), getYear(3), getPassengers(3))).toBe(1.99)
	expect(cumputeLoanRate(getCar("suv"), getEnergy("diesel"), getDistance(4), getYear(0), getPassengers(0))).toBe(3.11)
	expect(cumputeLoanRate(getCar("citadine"), getEnergy("electrique"), getDistance(0), getYear(5), getPassengers(3))).toBe(1.57)
	expect(cumputeLoanRate(getCar("berline"), getEnergy("gaz"), getDistance(4), getYear(1), getPassengers(1))).toBe(2.35)
})