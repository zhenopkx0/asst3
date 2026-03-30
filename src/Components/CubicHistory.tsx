import { useState } from 'react';
export const CubicHistory = ({a, b, c, d, onSelect}: {a: number; b: number; c: number; d: number; onSelect: (item: { a: number; b: number; c: number; d: number }) => void}) => {
    const [history, setHistory] = useState<
    { a: number; b: number; c: number; d: number }[]
  >([]);

    return (
        <div>
        <h1>History</h1>
        <button
          type="submit"
          className="
            mt-2
            bg-[#6b8e23]
            hover:bg-[#5f7d1f]
            text-white
            font-semibold
            py-3
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
        <ul className="mt-4">
          {history.map((item, index) => (
            <li key={index}>
              a: {item.a}, b: {item.b}, c: {item.c}, d: {item.d}
              <button
                onClick={() => onSelect(item)}
              >
                Go to Saved Values
              </button>
            </li>
          ))}
        </ul>
        </div>
    )
}