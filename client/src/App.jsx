import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Gallery from './pages/Gallery';
import Calendar from './pages/Calendar';
import Timer from './pages/Timer';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Message from './pages/Message';

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
      <Location />
      <Contact />
      <Account />
      <Message />
    </BrowserRouter>
  )
}
