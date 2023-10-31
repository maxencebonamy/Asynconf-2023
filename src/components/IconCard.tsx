import { Card } from "./ui/card"
import Tilt from "react-parallax-tilt"
import { useTheme } from "next-themes"

interface IconCardProps {
    className?: string
    children: React.ReactNode
}

const IconCard = ({ className, children } : IconCardProps) => {
	const { theme } = useTheme()

	return (
		<Tilt
			tiltReverse
			glareEnable
			glareColor={theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}
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