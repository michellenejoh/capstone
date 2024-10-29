import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ formData, onChange, availableTimes, dispatch }) {
    return (
        <div className='bookingpage'>
            <h1>Booking Page</h1>
            <BookingForm
                formData={formData}
                onChange={onChange}
                dispatch={dispatch}
                availableTimes={availableTimes}
            />
        </div>
    );
}

export default BookingPage;
