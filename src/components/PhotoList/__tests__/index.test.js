import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

afterEach(cleanup);

describe('Photolist is rendering', () => {
    it('Renders', () => {
        render(<PhotoList />);
    });

    it('Renders', () => {
        const { asFragment } = render(<PhotoList />);
        expect(asFragment()).toMatchSnapshot();
    });
});