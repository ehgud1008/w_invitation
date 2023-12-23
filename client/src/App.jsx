import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Gallery from './pages/Gallery';
import Calendar from './pages/Calendar';
import Timer from './pages/Timer';
import Map from './pages/Map';
import Contact from './pages/Contact';
import Map2 from './pages/Map';

export default function App() {
  
  useEffect( () => {
    console.log("123123")
  })
  return (
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path='/wedding/:url' element={<Home />} />
      </Routes>
      <Gallery />
      <Calendar />
      <Timer />
      <Map2 />
      <Contact />
    </BrowserRouter>
  )
}
