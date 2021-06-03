import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('contact component', () => {

    it('renders ContactForm', () => {
        render(<ContactForm />);
    });

    it('matches snapshot DOM node structure', () => {
        //render ContactForm
        const { asFragment } = render(<ContactForm />);
        //assert that snapshots match
        expect(asFragment()).toMatchSnapshot();
    });
});