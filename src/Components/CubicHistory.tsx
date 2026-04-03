import { useState } from 'react';

export const CubicHistory = ({
  a,
  b,
  c,
  d,
  onSelect,
}: {
  a: number;
  b: number;
  c: number;
  d: number;
  onSelect: (item: { a: number; b: number; c: number; d: number }) => void;
}) => {
  const [history, setHistory] = useState<
    { a: number; b: number; c: number; d: number }[]
  >([]);

  return (
    <div className="p-5 bg-[#f4f7f2] rounded-xl shadow-md border border-[#dbe5d3] max-w-md">
      <h1 className="text-xl font-semibold text-[#4f6f52] mb-3">
        History
      </h1>

      <button
        type="submit"
        className="
          mt-2 w-full
          bg-[#6b8e23]
          hover:bg-[#5f7d1f]
          text-white
          font-semibold
          py-2.5
          rounded-lg
          shadow-sm
          transition-all
          duration-200
          active:scale-95
        "
        onClick={() => {
          const newEntry = { a, b, c, d };
          setHistory([...history, newEntry]);
        }}
      >
        Save
      </button>

      <ul className="mt-4 space-y-3">
        {history.map((item, index) => (
          <li
            key={index}
            className="p-3 bg-white rounded-lg border border-[#e2eadc] shadow-sm flex flex-col gap-2"
          >
            <span className="text-sm text-[#3f5f45]">
              a: {item.a}, b: {item.b}, c: {item.c}, d: {item.d}
            </span>

            <button
              className="
                self-start
                text-sm
                bg-[#a3b18a]
                hover:bg-[#8fa876]
                text-white
                px-3 py-1
                rounded-md
                transition
                active:scale-95
              "
              onClick={() => onSelect(item)}
            >
              Go to Saved Values
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};