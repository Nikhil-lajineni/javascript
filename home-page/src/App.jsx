import React, { useState } from 'react';
import Nav from "./Components/nav/Nav";
import Home from "./Pages/home/Home";
import Counter from "./Components/Counter/Counter";
import Parent from './Components/parent-child/Parent';
import A from './Components/context-api/A';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav></Nav>
      <A/>
    </div>
  );
}

export default App;