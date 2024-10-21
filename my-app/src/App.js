import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles.css'
import Header from './Header';
import Footer from './Footer';
import BookingPage from './components/BookingPage'
import CallToAction from './components/CallToAction'
import Chicago from './components/Chicago'
import CustomersSay from './components/CustomersSay'
import Homepage from './components/Homepage'
import Specials from './components/Specials'

function App() {
  return (
    <Router>
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/testimonials" element={<CustomersSay />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/about" element={<Chicago />} />
        <Route path="/hero" element={<CallToAction />} />
        <Route path="/reserve" element={<BookingPage />} /> {/* Route for booking feature */}
      </Routes>

    <Footer />
    </>
    </Router>
  );
}

export default App;
