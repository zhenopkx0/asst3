import { useState } from "react";
import { CubicInput } from "./Components/CubicInput";
import { CubicGraph } from "./Components/CubicGraph";
import { CubicEquation } from "./Components/CubicEquation";
import { CubicTable } from "./Components/CubicTable";
import { CubicHistory } from "./Components/CubicHistory";

export const App = () => {
  let root1;
  let root2;
  let root3;

  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);

  const p: number = (3 * a * c - b * b) / (3 * a * a);
  const q: number =
    (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);

  const discriminant: number = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3);

  const theta: number =
    (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-(p / 3) * (p / 3) * (p / 3))));

  if (discriminant < 0) {
    const rootOne = 2 * Math.sqrt(-p / 3) * Math.cos(theta) - b / (3 * a);
    const rootTwo =
      2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI) / 3) - b / (3 * a);
    const rootThree =
      2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI) / 3) - b / (3 * a);
    root1 = rootOne.toFixed(2);
    root2 = rootTwo.toFixed(2);
    root3 = rootThree.toFixed(2);
  } else if (discriminant > 0) {
    const rootOne =
      Math.cbrt(-q / 2 + Math.sqrt(discriminant)) +
      Math.cbrt(-q / 2 - Math.sqrt(discriminant)) -
      b / (3 * a);
    root1 = rootOne.toFixed(2);
    root2 = "complex";
    root3 = "complex";
  } else {
    if (q === 0 && p === 0) {
      const rootOne =
        Math.cbrt(-q / 2 + Math.sqrt(discriminant)) +
        Math.cbrt(-q / 2 - Math.sqrt(discriminant)) -
        b / (3 * a);
      root1 = rootOne.toFixed(2);
      root2 = rootOne.toFixed(2);
      root3 = rootOne.toFixed(2);
    } else {
      const rootOne =
        Math.cbrt(-q / 2 + Math.sqrt(discriminant)) +
        Math.cbrt(-q / 2 - Math.sqrt(discriminant)) -
        b / (3 * a);
      const rootTwo = -Math.cbrt(-q / 2) - b / (3 * a);
      root1 = rootOne.toFixed(2);
      root2 = rootTwo.toFixed(2);
      root3 = rootTwo.toFixed(2);
    }
  }

  // 🌿 shared card style
  const card =
    "bg-[#f4f7f2] border border-[#c8d5c0] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-5 h-full";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef3ea] via-[#f6f8f3] to-[#e4eddc] py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#5c6b4f]">
          Cubic Equation Solver
        </h1>

        {/* Equation */}
        <div className={card}>
          <CubicEquation a={a} b={b} c={c} d={d} />
        </div>

        {/* Input + Table */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className={card}>
            <CubicInput
              a={a}
              b={b}
              c={c}
              d={d}
              setA={setA}
              setB={setB}
              setC={setC}
              setD={setD}
            />
          </div>

          <div className={card}>
            <CubicTable
              p={p}
              q={q}
              discriminant={discriminant}
              root1={root1}
              root2={root2}
              root3={root3}
            />
          </div>
        </div>

        {/* Graph + History aligned */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className={card + " flex justify-center items-center"}>
            <CubicGraph a={a} b={b} c={c} d={d} />
          </div>

          <div className={card}>
            <CubicHistory a={a} b={b} c={c} d={d} />
          </div>
        </div>
      </div>
    </div>
  );
};