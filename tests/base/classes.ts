// Covers: interfaces, type aliases, class syntax, implements,
//         max-classes-per-file (1), object-shorthand

interface Shape {
    area(): number;
    describe(): string;
}

interface Dimensions {
    width: number;
    height: number;
}

class Rectangle implements Shape {
    constructor(
        private readonly width: number,
        private readonly height: number,
    ) {}

    area(): number {
        return this.width * this.height;
    }

    describe(): string {
        const { width, height } = this;
        return `Rectangle(${width}x${height}, area=${this.area()})`;
    }
}

const dimensions: Dimensions = { width: 10, height: 5 };
const rect = new Rectangle(dimensions.width, dimensions.height);

export { Rectangle, rect };
export type { Shape, Dimensions };
