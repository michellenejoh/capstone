import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm label', () => {
    render(<BookingForm />);
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
})