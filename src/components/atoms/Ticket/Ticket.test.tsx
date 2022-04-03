import React from 'react';
import Ticket from './Ticket';
import { render } from '@testing-library/react';

describe("Ticket", () => {
    test("renders the Ticket component", () => {
        render(<Ticket />);
    });
});
