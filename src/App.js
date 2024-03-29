import './App.css';
import { Navbar, Container, Nav, Button }  from 'react-bootstrap';
import shoesData from './shoesData';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Detail from './Detail';
import Navigation from './Navigation';
import Cart from './Cart';


function App() {

  let [ShoesData, setShoesData] = useState(shoesData)


  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/JordanShop" element={<Home ShoesData={ShoesData} setShoesData={setShoesData}/>}/>
        <Route path="/signUp" element={<SignUp ShoesData={ShoesData}/>}/>
        <Route path='/detail/:id' element={<Detail ShoesData={ShoesData}/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );

}

export default App;
