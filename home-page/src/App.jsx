import React, { useState } from 'react';
import './App.css';
import Users from './Components/map/Users';
import Map from './Components/map/Map';
import Axios from './Components/axios/Axios';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Users /> */}
      <Axios />
    </div>
  );
}

export default App;