import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [{ name: 'portraits', description: 'Portraits of people in my life' }];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    // Baseline test
    it('Renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            mockContactSelected={mockContactSelected}
            mockSetContactSelected={mockSetContactSelected}
        />);
    });

    // Snapshot test
    it('Matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            mockContactSelected={mockContactSelected}
            mockSetContactSelected={mockSetContactSelected}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Emoji is visible', () => {
    it('Inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            mockContactSelected={mockContactSelected}
            mockSetContactSelected={mockSetContactSelected}
        />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('Links are visible', () => {
    it('Inserts text into the links', () => {
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            mockContactSelected={mockContactSelected}
            mockSetContactSelected={mockSetContactSelected}
        />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
});