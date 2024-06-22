import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
// import Header from './components/Header';
// import Navbar from './components/navbar/Navbar';
import Home from './components/navbar/navlinks/Home';
import Character from './components/navbar/navlinks/Character';
import Location from './components/navbar/navlinks/Location';
import Episode from './components/navbar/navlinks/Episode';
import './App.css'


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/character" element={<Character />}/>
          <Route path="/location" element={<Location />}/>
          <Route path="/episode" element={<Episode />}/>
        </Routes>
      </div>
    </>
  );
}

export default App
