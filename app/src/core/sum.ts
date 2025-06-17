import sanitizeNumber from "./helper/sanitizeNumber";

/**
 * Adds two numeric values.
 * @param first - The first number.
 * @param second - The second number.
 * @returns The sum of both numbers.
 * @throws If any input is not a valid number.
 */
export default function sum(first: number, second: number): number {
    const num1 = sanitizeNumber(first);
    const num2 = sanitizeNumber(second);

    if (num1 === null || num2 === null) {
        throw new Error('Invalid parameters: both inputs must be valid numbers.');
    }

    return num1 + num2;
}