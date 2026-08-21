// Covers: const/let, destructuring, spread, template literals,
//         nullish coalescing, optional chaining

const greeting = "hello world";
const count = 42;
const isActive = true;

const { length } = greeting;

const values = [1, 2, 3];
const [first, second, ...remaining] = values;

const source = null;
const fallback = source ?? "default";

const obj: { nested?: { value: string } } = {};
const nested = obj.nested?.value;

const optionalCall: (() => string) | undefined = () => "hello";
const result = optionalCall?.();

export { greeting, count, isActive, length, first, second, remaining, fallback, nested, result };
