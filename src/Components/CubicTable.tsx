export const CubicTable = ({
    p,
    q,
    discriminant,
    root1,
    root2,
    root3,
  }: {
    p: number;
    q: number;
    discriminant: number;
    root1: string;
    root2: string;
    root3: string;
  }) => {
    return (
      <div className="flex justify-center mt-6 px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur border border-green-100 rounded-2xl shadow-lg overflow-hidden">
          
          <table className="w-full text-left border-collapse">
            <tbody className="divide-y divide-green-100">
              
              {[
                { label: "p", value: p },
                { label: "q", value: q },
                { label: "Discriminant", value: discriminant },
                { label: "Root 1", value: root1 },
                { label: "Root 2", value: root2 },
                { label: "Root 3", value: root3 },
              ].map((row) => (
                <tr
                  key={row.label}
                  className="hover:bg-green-50 transition"
                >
                  <td className="px-4 py-3 font-medium text-green-900">
                    {row.label}
                  </td>
                  <td className="px-4 py-3 text-green-800">
                    {row.value}
                  </td>
                </tr>
              ))}
  
            </tbody>
          </table>
        </div>
      </div>
    );
  };