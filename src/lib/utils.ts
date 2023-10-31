import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function scrollToSection(section: React.RefObject<HTMLElement>) {
	section.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function formatNumberWithSeparators(value: number): string {
	return value.toLocaleString("fr-FR")
}

export function formatNumberWithComma(value: number): string {
	return value.toFixed(2).replaceAll(".", ",")
}

export function getMiddleValue<T>(array: T[]): T {
	return array[Math.floor((array.length - 1) / 2)]
}