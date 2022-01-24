import React from 'react';

import { render } from './utils/customRender';
import Home from '../pages/Home';
import {setupIntersectionObserverMock} from './__mocks__/intersectionObserverMock';


beforeEach(()=>{
    setupIntersectionObserverMock();
})

test('renders App div', () => {
    const { getByText } = render(<Home />)
    const title = getByText(/Latest Search/i)
    console.log(title)
    expect(title).toBeInTheDocument()
})