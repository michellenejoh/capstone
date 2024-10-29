import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchAPI, submitAPI } from './api';
import './App.css';
import './styles.css';
import ConfirmedBooking from './components/ConfirmedBooking';
import Header from './Header';
import Footer from './Footer';
import BookingPage from './components/BookingPage';
import CallToAction from './components/CallToAction';
import Chicago from './components/Chicago';
import CustomersSay from './components/CustomersSay';
import Homepage from './components/Homepage';
import Specials from './components/Specials';

const updateTimes = (state, action) => {
  switch (action.type) {
    case "update":
      return fetchAPI(action.date);
    default:
      return state;
  }
};

const initializeTimes = () => {
  const today = new Date(); // Create a new Date object for today's date
  return fetchAPI(today); // Call fetchAPI with today's date
};

function App() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'Birthday',
  });

  const handleChange = (e) => {
    const newForm = { ...formData };
    const id = e.target.id;
    const value = e.target.value;
    newForm[id] = value;
    setFormData(newForm);
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

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
          <Route path="/confirmation" element={<ConfirmedBooking />} />
          <Route
            path="/reserve"
            element={
              <BookingPage
                formData={formData}
                onChange={handleChange}
                dispatch={dispatch}
                availableTimes={availableTimes}
              />
            }
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
