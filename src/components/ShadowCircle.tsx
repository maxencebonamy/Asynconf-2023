import { cn } from "@/lib/utils"

const SHADOW_COLOR = "#22b357"

interface ShadowCircleProps {
    className?: string
    shadowRadius: number
}

const ShadowCircle = ({ className, shadowRadius }: ShadowCircleProps) => {
	return (
		<span
			className={cn("rounded-full bg-primary w-0 h-0", className ?? "")}
			style={{ boxShadow: `0 0 ${shadowRadius * 1}px ${shadowRadius}px ${SHADOW_COLOR}` }}
		/>
	)
}

export default ShadowCircle