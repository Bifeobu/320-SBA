import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
// import Header from './components/Header';
// import Navbar from './components/navbar/Navbar';
import Home from './components/navbar/navlinks/Home';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Header from './components/Header';



function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App
