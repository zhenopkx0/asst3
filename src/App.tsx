import { CubicInput } from './Components/CubicInput';
import { CubicGraph } from './Components/CubicGraph';
import { CubicEquation } from './Components/CubicEquation';
import { CubicTable } from './Components/CubicTable';
import { CubicHistory } from './Components/CubicHistory';

export const App = () => {
  return (
    <div className="app">
      <h1 className="text-3xl font-bold mb-4">Cubic Equation Solver</h1>
      <CubicInput />
      <CubicTable />
    </div>
  );
}