import React, { useState } from 'react';
import Nav from "./Components/nav/Nav";
import Home from "./Pages/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
      <Nav />
    </div>
  );
}

export default App;