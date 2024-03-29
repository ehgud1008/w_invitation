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
import { MarriageProvider } from './context/MarriageContext';
import { LocationProvider } from './context/LocationContext';
import { MessageProvider } from './context/MessageContext';
import { ContactProvider } from './context/ContactContext';

export default function App() {
  const [wedding_date, setWeddingDate] = useState('');
  const [seq, setSeq] = useState(0);
  useEffect( () => {
  })
  return (
    <MarriageProvider>
      <LocationProvider>
          <BrowserRouter>
            <ContactProvider>
              {/* <Header /> */}
              <Routes> 
                <Route path='/wedding/:url' element={<Home setWeddingDate={setWeddingDate} setSeq={setSeq}/>} />
              </Routes>
              <Gallery seq={seq}/>
              <Calendar wedding_date={wedding_date}/>
              <Timer wedding_date={wedding_date}/>
              <Location seq={seq} />
                {/* <Contact seq={seq}/> */}
                <Account seq={seq}/>
            </ContactProvider>
            <RSVP seq={seq}/>
            <MessageProvider>
              <Message seq={seq}/>
            </MessageProvider>
            <Footer />
          </BrowserRouter>  
      </LocationProvider>
    </MarriageProvider>
  )
}
