// import axios from 'axios';
import React from 'react';
import './App.css';
// import image from './assets/kalviumimage-removebg-preview.png';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/register';
import Home from './Components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
