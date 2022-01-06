import React from 'react';
import Badge from './Badge';
import { render } from '@testing-library/react';

describe("Badge", () => {
    test("renders the Badge component", () => {
        render(<Badge />);
    });
});
