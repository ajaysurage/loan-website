// src/App.js
import React from 'react';
import Navbar from './Footer section/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Static Pages/Home Page/Home';
import AboutUs from './Static Pages/About Page/AboutUs';
import Contact from './Static Pages/Contact Page/Contact'
import Service from './Static Pages/Services Page/Service';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='service' element={<Service/>}/>
    </Routes>
    </>
  );
}

export default App;
