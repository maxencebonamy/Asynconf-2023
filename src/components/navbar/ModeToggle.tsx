"use client"

import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react"


export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [darkTheme, setDarkTheme] = useState(theme === "dark")

    useEffect(() => {
        setTheme(darkTheme ? "dark" : "light")
    }, [darkTheme])

    return (
        <Switch onCheckedChange={e => setDarkTheme(!darkTheme)} defaultChecked={true} />
    )
}
