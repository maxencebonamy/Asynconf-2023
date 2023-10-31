import { formatNumberTwoDecimals, formatNumberWithComma, formatNumberWithSeparators, getMiddleValue } from "@/lib/utils"

test("La fonction formatNumberWithSeparators formatte les nombres correctement.", () => {
	expect(formatNumberWithSeparators(0)).toBe("0")
	expect(formatNumberWithSeparators(123)).toBe("123")
	expect(formatNumberWithSeparators(1234)).toBe("1 234")
	expect(formatNumberWithSeparators(999999999)).toBe("999 999 999")
})

test("La fonction formatNumberWithComma formatte les nombres correctement.", () => {
	expect(formatNumberWithComma("0")).toBe("0")
	expect(formatNumberWithComma("123")).toBe("123")
	expect(formatNumberWithComma("12.34")).toBe("12,34")
	expect(formatNumberWithComma("99999.9999")).toBe("99999,9999")
})

test("La fonction formatNumberTwoDecimals formatte les nombres correctement.", () => {
	expect(formatNumberTwoDecimals(0)).toBe("0.00")
	expect(formatNumberTwoDecimals(123)).toBe("123.00")
	expect(formatNumberTwoDecimals(12.34)).toBe("12.34")
	expect(formatNumberTwoDecimals(12.115)).toBe("12.12")
	expect(formatNumberTwoDecimals(99999.9999)).toBe("100000.00")
})

test("La fonction getMiddleValue renvoie la bonne valeur.", () => {
	expect(() => getMiddleValue([])).toThrow("Le tableau ne peut pas être vide.")
	expect(getMiddleValue([1, 2, 3])).toBe(2)
	expect(getMiddleValue([1, 2, 3, 4])).toBe(2)
})