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
    <div className="w-full">
      <h2 className="text-xl font-semibold text-[#5c6b4f] mb-4">
        Coefficients
      </h2>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4"
      >
        {[
          { label: "a", value: a, setter: setA },
          { label: "b", value: b, setter: setB },
          { label: "c", value: c, setter: setC },
          { label: "d", value: d, setter: setD },
        ].map(({ label, value, setter }) => (
          <div key={label} className="flex flex-col">
            <label className="text-sm font-medium text-[#5c6b4f]/90 mb-1">
              Coefficient {label}
            </label>

            <input
              type="number"
              value={value}
              onChange={(e) => setter(Number(e.target.value))}
              className="
                bg-[#fdfdf9]
                border border-[#c8d5c0]
                rounded-lg
                p-3
                text-[#3f4a36]
                placeholder-[#9aa68c]
                focus:outline-none
                focus:ring-2
                focus:ring-[#a3b18a]
                focus:bg-white
                transition
              "
            />
          </div>
        ))}
      </form>
    </div>
  );
};
