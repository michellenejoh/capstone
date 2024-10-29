import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../api';

function BookingForm({ formData, onChange, availableTimes, dispatch }) {
    const [isDateValid, setIsDateValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    function submitForm() {
        const isSubmitted = submitAPI(formData);
        if (isSubmitted) {
            navigate('/confirmation');
        } else {
            alert("Submission failed. Please try again.");
        }
    }

    function validateDate(date) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(date);
        selectedDate.setHours(0, 0, 0, 0);
        return selectedDate >= today;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const isValid = validateDate(formData.date);
        setIsDateValid(isValid);

        if (!isValid) {
            setErrorMessage("Please select a valid date.");
            return;
        }

        setErrorMessage('');
        submitForm();
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        onChange(e);
        dispatch({ type: "update", date: new Date(selectedDate) });
        const isValid = validateDate(selectedDate);
        setIsDateValid(isValid);
        setErrorMessage(isValid ? '' : 'Please select a valid date.');
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit} aria-labelledby="bookingFormTitle">
            <h2 id="bookingFormTitle">Make Your Reservation</h2>
            <label id="dateLabel" htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleDateChange}
                required
                className={!isDateValid ? 'invalid' : ''}
                aria-labelledby="dateLabel"
                aria-describedby="dateError"
                aria-invalid={!isDateValid}
            />

            <label htmlFor="time">Choose time</label>
            <select
                id="time"
                value={formData.time}
                onChange={onChange}
                aria-label="Choose time"
            >
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={formData.guests}
                onChange={onChange}
                aria-label="Number of guests"
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={formData.occasion}
                onChange={onChange}
                aria-label="Occasion"
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button type="submit" disabled={!isDateValid} aria-disabled={!isDateValid}>
                Make Your Reservation
            </button>

            <div aria-live="assertive" className="error-message">
                {!isDateValid && <span id="dateError">{errorMessage}</span>}
            </div>
        </form>
    );
}

export default BookingForm;