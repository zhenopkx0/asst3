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
    <div className="flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-100 px-4 py-8 min-h-screen">
      <div className="bg-white/90 backdrop-blur shadow-xl rounded-2xl p-8 w-full max-w-md border border-green-100">
        
        <h1 className="text-2xl font-semibold text-center mb-6 text-green-800">
          Cubic Solver
        </h1>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">

          {[{ label: "a", value: a, setter: setA },
            { label: "b", value: b, setter: setB },
            { label: "c", value: c, setter: setC },
            { label: "d", value: d, setter: setD }].map(({ label, value, setter }) => (

            <div key={label} className="flex flex-col">
              <label className="text-sm font-medium text-green-900/80 mb-1">
                Coefficient {label}
              </label>

              <input
                type="number"
                value={value}
                onChange={(e) => setter(Number(e.target.value))}
                className="bg-green-50 border border-green-200 rounded-lg p-3
                           text-green-900 placeholder-green-400
                           focus:outline-none focus:ring-2 focus:ring-green-500
                           focus:bg-white transition"
              />
            </div>
          ))}

          <button
            type="submit"
            className="mt-3 bg-green-700 hover:bg-green-800 
                       text-white font-semibold py-3 rounded-lg 
                       shadow-md transition-all duration-200 
                       active:scale-95"
          >
            Save
          </button>

        </form>
      </div>
    </div>
  );
};