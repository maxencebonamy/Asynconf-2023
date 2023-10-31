import creditCard from "@/assets/images/credit_card/cerdit_card.png"
import ShadowCircle from "@/components/ShadowCircle"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Tilt from 'react-parallax-tilt'

const CreditCard = () => {
    return (
        <div className="relative">
            <Tilt
                tiltReverse
                glareEnable
                glareColor="rgba(255, 255, 255, 0.5)"
                glarePosition="all"
                className="relative z-20"
                glareBorderRadius="12px"
            >
                <Card className="w-fit h-fit background-blur bg-transparent border-muted-foreground">
                    <Image className="aspect-auto w-96" src={creditCard} alt="Credit Card" width={500} height={200} />
                </Card>
            </Tilt>
            <ShadowCircle shadowRadius={100} className="absolute z-10 top-1 left-1" />
            <ShadowCircle shadowRadius={100} className="absolute z-10 bottom-1 right-10" />
        </div>
    )
}

export default CreditCard