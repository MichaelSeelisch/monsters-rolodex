import Calculator from '../src/calculator';

describe('Calculator', () => {
    it('Should be instanceable', () => {
        expect(new Calculator()).toBeInstanceOf(Calculator);
    });

    describe('add', () => {
        it('Should sum up 2 numbers', () => {
            const calculator = new Calculator();
            expect(calculator.add(3, 2)).toBe(5);
        });
        it('Should throw an Error if less than 2 args are supplied', () => {
            const calculator = new Calculator();
            expect(() => calculator.add(3)).toThrow();
        });
        it('Should throw an Error if the arguments are not numbers', () => {
            const calculator = new Calculator();
            expect(() => calculator.add(3, '2')).toThrow();
        });
    });

    describe('subtract', () => {
        it('Should subtract 2 numbers', () => {
            const calculator = new Calculator();
            expect(calculator.subtract(3, 2)).toBe(1);
        });
    })
});
