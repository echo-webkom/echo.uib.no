import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './testing-utils';
import Footer from '../footer';

describe('Footer', () => {
    test('renders without crashing', () => {
        render(<Footer />);
        expect(screen.getByTestId(/footer-standard/i)).toBeInTheDocument();
    });

    test('renders correctly', () => {
        render(<Footer />);
        expect(screen.getByText(/Thormøhlensgate 55/i)).toBeInTheDocument();
        expect(screen.getByText(/5006 Bergen/i)).toBeInTheDocument();
        expect(screen.getByText(/Org nr: 998 995 035/i)).toBeInTheDocument();
    });
});
