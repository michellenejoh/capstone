// Import functions
import { initializeTimes, updateTimes } from './path-to-your-functions';
import { fetchAPI } from './path-to-your-fetchAPI';

// Mock fetchAPI to ensure controlled test output
jest.mock('./path-to-your-fetchAPI', () => ({
    fetchAPI: jest.fn(),
}));

describe('initializeTimes and updateTimes', () => {
    beforeEach(() => {
        // Clear any previous mock calls or mock return values
        fetchAPI.mockClear();
    });

    test('initializeTimes should initialize with times from fetchAPI', () => {
        // Set mock return value for initializeTimes
        fetchAPI.mockReturnValue(['12:00 PM', '1:00 PM', '2:00 PM']);

        const times = initializeTimes();

        expect(fetchAPI).toHaveBeenCalled();
        expect(times).toEqual(['12:00 PM', '1:00 PM', '2:00 PM']);
    });

    test('updateTimes should return new times based on the selected date', () => {
        // Set mock return value for updateTimes
        const preSelectedDate = new Date(2024, 9, 28);  // Example date (October 28, 2024)
        fetchAPI.mockReturnValue(['3:00 PM', '4:00 PM']);

        const times = updateTimes(preSelectedDate);

        expect(fetchAPI).toHaveBeenCalledWith(preSelectedDate);
        expect(times).toEqual(['3:00 PM', '4:00 PM']);
    });
});
