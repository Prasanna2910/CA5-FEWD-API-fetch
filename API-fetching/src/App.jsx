// import all the requirements
import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/register';
import Home from './Components/Home';

// creating a function to give all the routes
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

// exporting the component
export default App;
