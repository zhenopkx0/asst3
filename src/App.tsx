import React, { useState } from 'react';
import { CubicInput } from './Components/CubicInput';
import { CubicGraph } from './Components/CubicGraph';
import { CubicEquation } from './Components/CubicEquation';
import { CubicTable } from './Components/CubicTable';
import { CubicHistory } from './Components/CubicHistory';

export const App = () => {
  const [data, setData] = useState({
    a: 0, b: 0, c: 0, d: 0,
    p: 0, q: 0, discriminant: 0,
    roots: []
  });

  return (
    <div className="app">
      <h1 className="text-3xl font-bold mb-4">Cubic Equation Solver</h1>
      <CubicInput setData={setData}/>
      <CubicTable data={data}/>
      <CubicHistory />
    </div>
  );
}