export const CubicEquation = ({
  a,
  b,
  c,
  d,
}: {
  a: number;
  b: number;
  c: number;
  d: number;
}) => {
  return (
    <div className="flex justify-center mt-4 px-4">
      <div className="bg-white/90 backdrop-blur border border-green-100 shadow-md rounded-xl px-6 py-4">
        <p className="text-center text-lg md:text-xl font-medium text-green-900 tracking-wide">
          {a}x<span className="align-super text-sm">3</span> + {b}x
          <span className="align-super text-sm">2</span> + {c}x + {d}
        </p>
      </div>
    </div>
  );
};
