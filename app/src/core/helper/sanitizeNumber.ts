/**
 * Sanitizes input and ensures it's a valid number.
 * @param input - The value to sanitize.
 * @returns The sanitized number, or null if invalid.
 */
export default function sanitizeNumber(input: number): number | null {
    return typeof input === 'number' && !isNaN(input) ? input : null;
}
