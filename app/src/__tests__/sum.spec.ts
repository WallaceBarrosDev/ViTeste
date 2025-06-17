import sum from '../core/sum';

describe('sum function [unit]', () => {

    it('throws an error if any input is invalid', () => {
        //@ts-expect-error Testing wrong type
        expect(() => sum('', 5)).toThrow('Invalid parameters: both inputs must be valid numbers.');

        //@ts-expect-error Testing wrong type
        expect(() => sum(5, 'string')).toThrow('Invalid parameters: both inputs must be valid numbers.');

        //@ts-expect-error Testing missing param
        expect(() => sum()).toThrow('Invalid parameters: both inputs must be valid numbers.');
    });

    it('correctly sums two valid numbers', () => {
        expect(sum(2, 4)).toBe(6);
        expect(sum(-3, 7)).toBe(4);
        expect(sum(0, 0)).toBe(0);
    });
});