import { cn } from "@/lib/utils"
import { Card } from "./ui/card"
import Tilt from 'react-parallax-tilt'

interface IconCardProps {
    className?: string
    children: React.ReactNode
}

const IconCard = ({className, children} : IconCardProps) => {
    return (
        <Tilt
            tiltReverse
            glareEnable
            glareColor="rgba(255, 255, 255, 0.5)"
            glarePosition="all"
            glareBorderRadius="12px"
            className={className ?? ""}
        >
            <Card className="p-6">
                {children}
            </Card>
        </Tilt>
    )
}

export default IconCard