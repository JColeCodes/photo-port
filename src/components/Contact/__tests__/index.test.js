import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('Renders', () => {
        render(<ContactForm />);
    });

    it('Matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('Renders', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    });

    it('Renders', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('submit-button')).toHaveTextContent('Submit');
    });
});