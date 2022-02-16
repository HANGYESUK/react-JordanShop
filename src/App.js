import './App.css';
import { Navbar, Container, Nav, Button }  from 'react-bootstrap';
import shoesData from './shoesData';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Detail from './Detail';
import Navigation from './Navigation';

function App() {

  let [ShoesData, setShoesData] = useState(shoesData)

  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home ShoesData={ShoesData}/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>

    </div>
  );

}

export default App;
