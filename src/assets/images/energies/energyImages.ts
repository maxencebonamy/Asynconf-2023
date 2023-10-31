import diesel from "./diesel.png"
import electrique from "./electrique.png"
import essence from "./essence.png"
import gaz from "./gaz.png"
import hybride from "./hybride.png"

import type { StaticImageData } from "next/image"
import energies from "@/assets/data/energies.json"

const types = energies.map(e => e.id)

const energyImages: { [key in typeof types[number]]: StaticImageData} = {
	diesel: diesel,
	electrique: electrique,
	essence: essence,
	gaz: gaz,
	hybride: hybride
}

export default energyImages