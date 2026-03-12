import { useState, useRef } from "react";

export const CubicInput = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [c, setC] = useState<number>(0);
    const [d, setD] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const p: number = (3 * a * c - b * b) / (3 * a * a);
        const q: number = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
    
        // Display p and q values
        (document.getElementById("p-result") as HTMLParagraphElement).textContent = `${p}`;
    
        (document.getElementById("q-result") as HTMLParagraphElement).textContent = `${q}`;
    
        const discriminant: number = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3);
    
        (document.getElementById("discriminant-result") as HTMLParagraphElement).textContent = `${discriminant}`;
    
        const theta: number = (1/3)*Math.acos(-q / (2 * Math.sqrt(-(p / 3) * (p / 3) * (p / 3))));
        if(inputRef.current) {
            if (discriminant < 0) {
            const rootOne = 2 * Math.sqrt(-p / 3) * Math.cos(theta) - b / (3 * a);
            const rootTwo = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI / 3)) - b / (3 * a);
            const rootThree = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI / 3)) - b / (3 * a);
            inputRef.current.value = `Roots: ${rootOne}, ${rootTwo}, ${rootThree}`;
        
            } else if (discriminant > 0) {
            const rootOne = Math.cbrt(-q / 2 + Math.sqrt(discriminant)) + Math.cbrt(-q / 2 - Math.sqrt(discriminant)) - b / (3 * a);
            inputRef.current.value = `Root: ${rootOne}`;
        
            } else {
            if (q === 0 && p === 0) {
                const rootOne = Math.cbrt((-q / 2) + Math.sqrt(discriminant)) + Math.cbrt((-q / 2) - Math.sqrt(discriminant)) - b / (3 * a);
                inputRef.current.value = `Root: ${rootOne}`;
        
            } else {
                const rootOne = Math.cbrt((-q / 2) + Math.sqrt(discriminant)) + Math.cbrt((-q / 2) - Math.sqrt(discriminant)) - b / (3 * a); // Cardano
                const rootTwo = -Math.cbrt(-q / 2) - b / (3 * a); // Single root
                inputRef.current.value = `Roots: ${rootOne}, ${rootTwo}`;
                }
            }
        }
    }; 

    return (
        <div className="cubic-input">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="number" placeholder="a" value={a} onChange={(e) => setA(Number(e.target.value))} className="border p-2" />
                <input type="number" placeholder="b" value={b} onChange={(e) => setB(Number(e.target.value))} className="border p-2" />
                <input type="number" placeholder="c" value={c} onChange={(e) => setC(Number(e.target.value))} className="border p-2" />
                <input type="number" placeholder="d" value={d} onChange={(e) => setD(Number(e.target.value))} className="border p-2" />
                <button type="submit" className="bg-blue-500 text-white p-2">Calculate</button>
            </form>
            <p id="p-result"></p>
            <p id="q-result"></p>
            <p id="discriminant-result"></p>
            <input ref={inputRef} readOnly className="border p-2 mt-4 w-full" />
        </div>
    )
}