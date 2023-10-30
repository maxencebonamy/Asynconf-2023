"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

const SHADOW_COLOR = "#22b357"
const MIN_SHDAOW_RADIUS = 4
const MAX_SHADOW_RADIUS = 8

interface ShadowButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

const ShadowButton = ({children, className, onClick}: ShadowButtonProps) => {

    const [shadowRadius, setShadowRadius] = useState(MIN_SHDAOW_RADIUS)

    const style = {
        boxShadow: `0 0 ${shadowRadius * 4}px ${shadowRadius}px ${SHADOW_COLOR}`
    }

    return (
        <Button
            className={cn("transition-shadow duration-500", className ?? "")}
            style={style}
            onMouseEnter={() => setShadowRadius(MAX_SHADOW_RADIUS)}
            onMouseLeave={() => setShadowRadius(MIN_SHDAOW_RADIUS)}
            onClick={onClick ?? (() => {})}
        >
            {children}
        </Button>
    )
}

export default ShadowButton