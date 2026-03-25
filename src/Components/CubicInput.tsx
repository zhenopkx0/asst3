type CubicInputProps = {
  a: number;
  b: number;
  c: number;
  d: number;
  setA: (a: number) => void;
  setB: (b: number) => void;
  setC: (c: number) => void;
  setD: (d: number) => void;
};

export const CubicInput = ({
  a,
  b,
  c,
  d,
  setA,
  setB,
  setC,
  setD,
}: CubicInputProps) => {
  return (
    <div className="flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Cubic Equation Solver
        </h1>

        <form onSubmit={() => {}} className="flex flex-col gap-4">
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
      </div>
    </div>
  );
};
