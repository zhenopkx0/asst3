import React, { useState } from 'react';
import { CubicInput } from './Components/CubicInput';
import { CubicGraph } from './Components/CubicGraph';
import { CubicEquation } from './Components/CubicEquation';
import { CubicTable } from './Components/CubicTable';
import { CubicHistory } from './Components/CubicHistory';

export const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  
  return (
    <div className="app">
      <h1 className="text-3xl font-bold mb-4">Cubic Equation Solver</h1>
      <CubicInput />
      <CubicTable />
      <CubicHistory />
    </div>
  );
}