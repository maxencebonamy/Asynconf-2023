import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Fonction qui vient de la librairie ShadCN/UI, qui permet de fusionner des classes CSS / Tailwind
 * @param inputs Les différentes chaînes de caractères contenant des classes CSS / Tailwind
 * @returns Une seule chaîne de caractères avec les classes fusionnées
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

/**
 * Scroll en haut de la section référencée par la référence en paramètre
 * Dans le cas où la référence ne contient aucune valeur, rien ne se passe, aucune exception n'est levée
 * @param section Référence de la section à laquelle on veut scroll
 */
export function scrollToSection(section: React.RefObject<HTMLElement>) {
	section.current?.scrollIntoView({ behavior: "smooth", block: "start" })
}

/**
 * Formatter des grands nombre en ajoutant des espaces pour séparer les milliers
 * @param value Nombre initial
 * @returns Chaîne de caractères formatée
 */
export function formatNumberWithSeparators(value: number): string {
	const formattedNumber = value.toLocaleString("fr-FR")
	return formattedNumber.replace(/\s+/g, " ");

}

/**
 * Formatter des nombres flottants en remplaçant les points par des virgules
 * @param value Nombre initial sous forme de chaîne de caractères
 * @returns Chaîne de caractères formatée
 */
export function formatNumberWithComma(value: string): string {
	return value.replaceAll(".", ",")
}

/**
 * Formatter des nombres flottants en ne conservant que les deux premières décimales (arrondi à l'entier le plus proche)
 * @param value Nomre initial
 * @returns Chaîne de caractères formatée
 */
export function formatNumberTwoDecimals(value: number): string {
	return value.toFixed(2)
}

/**
 * Obtenir l'élément situé à la moitié d'un tableau (celui juste avant si la taille du tableau est paire)
 * @param array Le tableau
 * @returns La valeur du milieu
 * @throws Une exeption est levée lorsque le tableau est vide
 */
export function getMiddleValue<T>(array: T[]): T {
	if (array.length === 0) throw "Le tableau ne peut pas être vide."
	return array[Math.floor((array.length - 1) / 2)]
}