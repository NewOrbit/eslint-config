// Covers: Promise patterns, async/await, no-throw-literal,
//         error handling with proper Error objects

const delay = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

const withTimeout = async <T>(promise: Promise<T>, timeoutMs: number): Promise<T> => {
    const timeout = new Promise<never>((_resolve, reject) =>
        setTimeout(() => reject(new Error(`Timed out after ${timeoutMs}ms`)), timeoutMs),
    );
    return Promise.race([promise, timeout]);
};

const parseJson = async <T>(raw: string): Promise<T> => {
    try {
        return JSON.parse(raw) as T;
    } catch (_err) {
        throw new Error(`Invalid JSON: ${raw}`);
    }
};

export { delay, withTimeout, parseJson };
