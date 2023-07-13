import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ContextParent } from './component/UseState.js/Context/ContextParent';
import { ChildA } from './component/UseState.js/Context/ContextChildren';
function App() {
  return (
    <div className="App">
     <ContextParent>
      <ChildA />
     </ContextParent>
    </div>
  );
}

export default App;
