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
import UseRef from './Components/use_ref/UseRef';
import Controlled from './Components/controlled/Controlled';
import Uncontrolled from './Components/controlled/Uncontrolled';
import Profile from './Pages/profile/Profile';
import Personal from './Pages/profile/Personal';
import Professional from './Pages/profile/Professional';
import Educational from './Pages/profile/Educational';
import { Navigate } from 'react-router-dom';
import UseReducer from './Components/use-reducer/UseReducer';
import Name from './Components/redux/Name';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
      {/* <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path={"/profile"} element={<Profile />}>
            <Route path="" element={<Navigate to="educational" />} />
            <Route path="personal" element={<Personal />} />
            <Route path="professional" element={<Professional />} />
            <Route path="educational" element={<Educational />} />
          </Route>
        </Routes>
        
        </div> */}
        {/* <UseRef /> */}
        {/* <Controlled /> */}
        {/* <Uncontrolled /> */}
        {/* <UseReducer /> */}
        <Name />
    </div>
  );
}

export default App;