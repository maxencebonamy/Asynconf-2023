import type * as cars from "@/assets/data/cars.json"
import type * as energies from "@/assets/data/energies.json"
import type * as distances from "@/assets/data/distances.json"
import type * as years from "@/assets/data/years.json"
import type * as passengers from "@/assets/data/passengers.json"


export type CarType = typeof cars[0]
export type EnergyType = typeof energies[0]
export type DistanceType = typeof distances[0]
export type YearType = typeof years[0]
export type PassengersType = typeof passengers[0]