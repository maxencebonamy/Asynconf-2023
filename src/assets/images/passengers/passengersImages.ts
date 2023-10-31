import p1 from "./1.png"
import p2 from "./2.png"
import p3 from "./3.png"
import p4 from "./4.png"

import { StaticImageData } from "next/image"
import passengers from "@/assets/data/passengers.json"

const types = passengers.map(e => e.id)

const passengersImages: { [key in typeof types[number]]: StaticImageData} = {
    0: p1,
    1: p2,
    2: p3,
    3: p4
}

export default passengersImages