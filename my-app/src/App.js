import React, { useState } from 'react';
import { useReducer } from 'react';
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

const updateTimes = (state, action) => {
  switch (action.type) {
      case 'UPDATE_TIMES':
        if (action.payload === '2024-10-23') {
          return ['17:00', '18:00', '22:00'];  // Example available times for this date
        } else {
          return ['17:00', '19:00', '20:00'];  // Default fallback times
        }
      default:
        return state;
    }
  };

const initializeTimes = ['17:00', '18:00', '19:00'];

function App() {
  const [formData, setFormData] = useState ({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
});
function handleChange(e) {
  const newForm = { ...formData };
  const id = e.target.id;
  const value = e.target.value;
  newForm[id] = value;
  setFormData(newForm);
  }
function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted data:', formData);
}

const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);


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
        <Route path="/reserve" element={<BookingPage
                                formData={formData}
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                dispatch={dispatch}
                                availableTimes={availableTimes}/>} />
      </Routes>
    <Footer />
    </>
    </Router>
  );
}

export default App;
