import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/navbar/Navbar';
import './App.css'

const BASE_URL = 'https://rickandmortyapi.com/api'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
    </>
  );
}

export default App
