import { render } from '@testing-library/react';
import React from 'react';

import Hello from './Hello';

describe('Hello', () => {
  it('should render the provided name', () => {
    const { getByText } = render(<Hello name="Eric" />);

    expect(getByText(/eric/i)).toBeTruthy();
  });
});
