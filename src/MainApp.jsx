import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppTP1EX1 from './AppTP1EX1';
import AppTP1EX3 from './AppTP1EX3';
import AppTP1EX4 from './AppTP1EX4';
import AppTP2EX1 from './AppTP2EX1';
import AppTP3EX1 from './AppTP3EX1';
import NavBar from "./Components/NavBar/NavBar";
import AppTP4 from './AppTP4';
import Home from './pages/Home';

function MainApp() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/TP1EX1' element={<AppTP1EX1 />} />
          <Route path='/TP1EX3' element={<AppTP1EX3 />} />
          <Route path='/TP1EX4' element={<AppTP1EX4/>} />
          <Route path='/TP2EX1' element={<AppTP2EX1 />} />
          <Route path='/TP3EX1' element={<AppTP3EX1 />} />
          <Route path='/TP4' element={<AppTP4 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainApp;