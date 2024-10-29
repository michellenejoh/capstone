import React from 'react';
import { initializeTimes, updateTimes } from './path-to-your-functions';
import { fetchAPI } from './path-to-your-fetchAPI';
import { render, screen } from '@testing-library/react';
import BookingForm, { validateDate } from './BookingForm';

jest.mock('./path-to-your-fetchAPI', () => ({
    fetchAPI: jest.fn(),
}));

describe('initializeTimes and updateTimes', () => {
    beforeEach(() => {
        fetchAPI.mockClear();
    });

    test('initializeTimes should initialize with times from fetchAPI', () => {
        fetchAPI.mockReturnValue(['12:00 PM', '1:00 PM', '2:00 PM']);

        const times = initializeTimes();

        expect(fetchAPI).toHaveBeenCalled();
        expect(times).toEqual(['12:00 PM', '1:00 PM', '2:00 PM']);
    });

    test('updateTimes should return new times based on the selected date', () => {
        const preSelectedDate = new Date(2024, 9, 28);
        fetchAPI.mockReturnValue(['3:00 PM', '4:00 PM']);

        const times = updateTimes(preSelectedDate);

        expect(fetchAPI).toHaveBeenCalledWith(preSelectedDate);
        expect(times).toEqual(['3:00 PM', '4:00 PM']);
    });
});

describe('BookingForm', () => {
    const mockOnChange = jest.fn();
    const mockDispatch = jest.fn();
    const mockFormData = {
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
    };
    const mockAvailableTimes = ['18:00', '19:00', '20:00'];

    test('should have required attributes on input fields', () => {
        render(
            <BookingForm
                formData={mockFormData}
                onChange={mockOnChange}
                availableTimes={mockAvailableTimes}
                dispatch={mockDispatch}
            />
        );

        const dateInput = screen.getByLabelText(/choose date/i);
        const timeSelect = screen.getByLabelText(/choose time/i);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        const occasionSelect = screen.getByLabelText(/occasion/i);

        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toBeRequired();

        expect(timeSelect).toHaveAttribute('id', 'time');
        expect(timeSelect).toBeInTheDocument();

        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');

        expect(occasionSelect).toHaveAttribute('id', 'occasion');
        expect(occasionSelect).toBeInTheDocument();
    });
});

describe('Validation Functions', () => {
    test('validateDate should return true for valid dates', () => {
        const today = new Date();
        const validDate = today.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
        expect(validateDate(validDate)).toBe(true);
    });

    test('validateDate should return false for past dates', () => {
        const pastDate = new Date();
        pastDate.setDate(pastDate.getDate() - 1); // Set to yesterday
        const invalidDate = pastDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
        expect(validateDate(invalidDate)).toBe(false);
    });
});
