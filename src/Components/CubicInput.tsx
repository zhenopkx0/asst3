import { useState } from "react";
import type { CubicData } from "./CubicData.ts";

export const CubicInput = ({a, b, c, d, p, q, discriminant, roots}: CubicData) => {
    let roots = [];

    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [c, setC] = useState<number>(0);
    const [d, setD] = useState<number>(0);
    const [p, setP] = useState<number>(0);
    const [q, setQ] = useState<number>(0);
    const [discriminant, setDiscriminant] = useState<number>(0);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const p: number = (3 * a * c - b * b) / (3 * a * a);
        const q: number = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
        setP(p);
        setQ(q);

        const discriminant: number = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3);
        setDiscriminant(discriminant);

        const theta: number = (1/3)*Math.acos(-q / (2 * Math.sqrt(-(p / 3) * (p / 3) * (p / 3))));

            if (discriminant < 0) {
                const rootOne = 2 * Math.sqrt(-p / 3) * Math.cos(theta) - b / (3 * a);
                const rootTwo = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI / 3)) - b / (3 * a);
                const rootThree = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI / 3)) - b / (3 * a);
                roots = [rootOne, rootTwo, rootThree];
            
            } else if (discriminant > 0) {
                const rootOne =
                    Math.cbrt(-q / 2 + Math.sqrt(discriminant)) +
                    Math.cbrt(-q / 2 - Math.sqrt(discriminant)) -
                    b / (3 * a);
                    roots = [rootOne, "complex", "complex"];
            
            } else {
                if (q === 0 && p === 0) {
                    const rootOne =
                        Math.cbrt((-q / 2) + Math.sqrt(discriminant)) +
                        Math.cbrt((-q / 2) - Math.sqrt(discriminant)) -
                        b / (3 * a);
                        roots = [rootOne, rootOne, rootOne];
            
                } else {
                    const rootOne =
                        Math.cbrt((-q / 2) + Math.sqrt(discriminant)) +
                        Math.cbrt((-q / 2) - Math.sqrt(discriminant)) -
                        b / (3 * a);
                    const rootTwo = -Math.cbrt(-q / 2) - b / (3 * a);
                    roots = [rootOne, rootTwo, "complex"];
                }
        } 

        setData({
            a, b, c, d,
            p,
            q,
            discriminant,
            roots
          });
    }; 

    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
                
                <h1 className="text-2xl font-bold text-center mb-6">
                    Cubic Equation Solver
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    <input
                        type="number"
                        placeholder="Coefficient a"
                        value={a}
                        onChange={(e) => setA(Number(e.target.value))}
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="number"
                        placeholder="Coefficient b"
                        value={b}
                        onChange={(e) => setB(Number(e.target.value))}
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="number"
                        placeholder="Coefficient c"
                        value={c}
                        onChange={(e) => setC(Number(e.target.value))}
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        type="number"
                        placeholder="Coefficient d"
                        value={d}
                        onChange={(e) => setD(Number(e.target.value))}
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-lg"
                    >
                        Save
                    </button>
                </form>

                {/* Results */}
                <div className="mt-6 space-y-2 text-sm text-gray-700">
                    <p><span className="font-semibold">p:</span> {p}</p>
                    <p><span className="font-semibold">q:</span> {q}</p>
                    <p><span className="font-semibold">Discriminant:</span> {discriminant}</p>
                </div>

                {/* Output */}
                <input
                    readOnly
                    className="mt-4 w-full border rounded-lg p-3 bg-gray-50 text-gray-800"
                />
            </div>
        </div>
    );
};