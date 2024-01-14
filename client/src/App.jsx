import React, { useEffect, useState } from 'react'
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
import RSVP from './pages/RSVP';
import Footer from './components/Footer';
import { MarriageProvider } from './MarriageContext';

export default function App() {
  const [wedding_date, setWeddingDate] = useState('');
  useEffect( () => {
  })
  return (
    <MarriageProvider>
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path='/wedding/:url' element={<Home setWeddingDate={setWeddingDate}/>} />
        </Routes>
        <Gallery />
        <Calendar wedding_date={wedding_date}/>
        <Timer wedding_date={wedding_date}/>
        <Location />
        <Contact />
        <Account />
        <RSVP />
        <Message />

        <Footer />
      </BrowserRouter>
    </MarriageProvider>
  )
}
