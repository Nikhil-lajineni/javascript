import React, { useState } from 'react';
import Nav from "./Components/nav/Nav";
import Home from "./Pages/home/Home";
import Counter from "./Components/Counter/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav></Nav>
      <Counter></Counter>
    </div>
  );
}

export default App;