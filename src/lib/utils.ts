import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function scrollToSection(section: React.RefObject<HTMLElement>) {
	section.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}