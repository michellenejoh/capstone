import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ formData, onChange, onSubmit, availableTimes, dispatch }) {
    return (
        <div>
            <h1>Booking Page</h1>
            <BookingForm
                formData={formData}
                onChange={onChange}
                onSubmit={onSubmit}
                dispatch={dispatch}
                availableTimes={availableTimes}
            />
        </div>
    );
}

export default BookingPage;
