import React from 'react';

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders About test
    //first test
    it('renders', () => {
        render(<About />);
    });
    //second test
    it('matches snapshot DOM node structure', () => {
        //render About
        const { asFragment } = render(<About />);
        //assert that snapshots match
        expect(asFragment()).toMatchSnapshot();
    });
});

