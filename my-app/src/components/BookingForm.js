import React from 'react';

function BookingForm({ formData, onChange, onSubmit, availableTimes, dispatch }) {
    const handleDateChange = (e) => {
        onChange(e);
        const selectedDate = e.target.value;
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="date">Choose date</label>
            <input type="date" id="date" value={formData.date} onChange={handleDateChange} />

            <label htmlFor="time">Choose time</label>
            <select id="time" value={formData.time} onChange={onChange}>
            {availableTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.guests} onChange={onChange} />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formData.occasion} onChange={onChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;
