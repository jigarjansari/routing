import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
import Home from './Home';



export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
