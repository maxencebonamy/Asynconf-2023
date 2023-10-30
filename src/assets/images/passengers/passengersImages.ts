import p1 from "./1.png"
import p2 from "./2.png"
import p3 from "./3.png"
import p4 from "./4.png"

import { StaticImageData } from "next/image"
import passengers from "@/assets/data/passengers.json"

const types = passengers.map(e => e.id)

const passengersImages: { [key in typeof types[number]]: StaticImageData} = {
    1: p1,
    2: p2,
    3: p3,
    4: p4
}

export default passengersImages