import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe("App component", () => {

    it('renders "properly"', async () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/home']}>
                <App />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });
    it('renders homepage after click', async () => {
        const user = userEvent.setup();
        render(
            <MemoryRouter initialEntries={['/home']}>
                <App />
            </MemoryRouter>
        );

        const link = screen.getByRole('link', { name: 'Home' });

        // await user.click(link);

        // expect(screen.findByText(/Home page content here/i)).toBeInTheDocument();
        // expect(screen.getByRole('paragraph').textContent).toMatch(/Home page content here/i);

        expect(screen.getByTestId('main-container')).toBeInTheDocument()

    });
});

describe.skip('something truthy and falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true);
    });

    it('false to be false', () => {
        expect(false).toBe(false);
    });
});