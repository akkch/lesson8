    const appOperations = require('../src/appOperations');

    test("multiplication property of zero 0 * 5 = 0", () => {
        expect(appOperations(0, 5)).toBe(0);
    });
    
    test("multiplication property of zero 5 * 0 = 0", () => {
        expect(appOperations(5, 0)).toBe(0);
    });
    
    test("multiplication property of zero 0 * 0 = 0", () => {
        expect(appOperations(0, 0)).toBe(0);
    });
