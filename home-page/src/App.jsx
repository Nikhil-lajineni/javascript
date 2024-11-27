import React, { useState } from 'react';
import './App.css';
import Nav from './Components/nav/Nav';
import Home from './Pages/home/Home';
import Products from './Components/axios/Products';
import { Route, Routes } from 'react-router-dom';
import Jewelery from './Pages/jewelery/Jewelery';
import Electronics from './Pages/electronics/Electronics';
import Mens from './Pages/mens/Mens';
import Womens from './Pages/womens/Womens';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;