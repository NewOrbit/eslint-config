// Covers: arrow functions, default params, generics, async/await,
//         curly braces on branches, prefer-const, eqeqeq

const double = (n: number): number => n * 2;

const clamp = (value: number, min: number, max: number): number => {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
};

const identity = <T>(value: T): T => value;

const greet = (name = "world"): string => `Hello, ${name}!`;

const fetchText = async (url: string): Promise<string> => {
    const response = await fetch(url);
    return response.text();
};

const divide = (a: number, b: number): number | null => {
    if (b === 0) {
        return null;
    }
    return a / b;
};

export { double, clamp, identity, greet, fetchText, divide };
