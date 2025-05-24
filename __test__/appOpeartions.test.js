    const appOperations = require('../src/appOperations');
    
    test("5 + 5 = 10", () => {
        expect(appOperations.add(5, 5)).toBe(10);
    });
    
    test("10 - 5 = 5", () => {
        expect(appOperations.substract(10, 5)).toBe(5);
    });
    
    test("0 * 5 = 0", () => {
        expect(appOperations.multiply(0, 5)).toBe(0);
    });

    test("6 / 3 = 2", () => {
        expect(appOperations.divide(6, 3)).toBe(2);
    });

     test("6 / 0 = error", () => {
        expect(() => appOperations.divide(6, 0)).toThrow("Cannot divide by zero");
        });
    

