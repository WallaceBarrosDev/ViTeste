import sanitizeNumber from "../core/helper/sanitizeNumber";

describe('sanitizeNumber function [unit]', () => {
    
    it('returns null if input is undefined', () => {
        //@ts-expect-error Testing missing param
        expect(sanitizeNumber()).toBeNull();
    });

    it('returns null if input is not a number', () => {
        //@ts-expect-error Testing wrong type
        expect(sanitizeNumber("string test")).toBeNull();
    });

    it('returns null if input is NaN', () => {
        expect(sanitizeNumber(NaN)).toBeNull();
    });

    it('returns the number itself if input is a valid number', () => {
        expect(sanitizeNumber(10)).toBe(10);
    });
});
