import logo from './logo.svg';
import './App.css';
import { ParentOne } from './component/UseState.js/Optimization/ParentOne';
import { ChildOne } from './component/UseState.js/Optimization/ChildOne';
import { GrandParent } from './component/UseState.js/Optimization/GrandParent';
import { ParentTwo } from './component/UseState.js/Optimization/ParentTwo';
import { ParentThree } from './component/UseState.js/IncorrectOptimization/ParentThree';
import { ParentFour } from './component/UseState.js/IncorrectOptimization/ParentFour';

function App() {
  return (
    <div className="App">
      <ParentFour />
    </div>
  );
}

export default App;
