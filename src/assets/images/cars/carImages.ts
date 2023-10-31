import berline from "./berline.png"
import cabriolet from "./cabriolet.png"
import citadine from "./citadine.png"
import suv from "./suv.png"

import type { StaticImageData } from "next/image"
import cars from "@/assets/data/cars.json"

const types = cars.map(e => e.id)

const carImages: { [key in typeof types[number]]: StaticImageData} = {
	berline: berline,
	cabriolet: cabriolet,
	citadine: citadine,
	suv: suv
}

export default carImages