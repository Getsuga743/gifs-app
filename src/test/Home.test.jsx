import React from 'react';

import { render } from './utils/customRender';
import Home from '../pages/Home';
import { setupIntersectionObserverMock } from './mocks/intersectionObserverMock';

beforeEach(() => {
  setupIntersectionObserverMock();
});

test('renders App div', () => {
  const { getByText } = render(<Home />);
  const title = getByText(/Latest Search/i);
  console.log(title);
  expect(title).toBeInTheDocument();
});
