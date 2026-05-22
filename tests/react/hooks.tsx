// Covers: rules-of-hooks (hooks at top level only),
//         exhaustive-deps (correct dependency arrays)

import { useCallback, useEffect, useState } from "react";

interface CounterProps {
    initialCount?: number;
    onCountChange?: (count: number) => void;
}

const Counter = ({ initialCount = 0, onCountChange }: CounterProps) => {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        onCountChange?.(count);
    }, [count, onCountChange]);

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount((prev) => prev - 1);
    }, []);

    return (
        <div>
            <button onClick={decrement} type="button">-</button>
            <span>{count}</span>
            <button onClick={increment} type="button">+</button>
        </div>
    );
};

export { Counter };
