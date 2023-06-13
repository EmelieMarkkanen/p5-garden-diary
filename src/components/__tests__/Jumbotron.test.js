import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import JumboTron from '../Jumbotron';
import { Jumbotron } from 'react-bootstrap';

test("renders Jumbotron component", () => {
    render(<Jumbotron />);
});

test('displays link to signup page', () => {
    const { getByText } = render(
        <Router>
            <JumboTron />
        </Router>
    );
    const signupLink = getByText('Join Garden Diaries today');
    expect(signupLink).toBeInTheDocument();
    expect(signupLink).toHaveAttribute('href', '/signup');
});

