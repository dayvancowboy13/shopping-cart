import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../components/Cart';
import { ProductDataContext, CartContentsContext } from "../components/ProjectContexts";
import { vi } from 'vitest';

describe("Cart component", () => {
    const addToCart = vi.fn();
    const cartContents = [
        {
            "id": 1,
            "qty": 2
        },
        {
            "id": 2,
            "qty": 2
        }
    ];
    const productData = [{
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },];

    it('renders "properly"', async () => {

        render(

            <MemoryRouter>
                <CartContentsContext.Provider value={{ cartContents, addToCart }}>
                    <ProductDataContext.Provider value={productData}>
                        <Cart />
                    </ProductDataContext.Provider>
                </CartContentsContext.Provider>
            </MemoryRouter>
        );
        // expect(container).toMatchSnapshot();
        expect(screen.getByTestId('cart-main')).toBeInTheDocument()

    });

    it('cart total is correct', async () => {
        render(
            <MemoryRouter>
                <CartContentsContext.Provider value={{ cartContents, addToCart }}>
                    <ProductDataContext.Provider value={productData}>
                        <Cart />
                    </ProductDataContext.Provider>
                </CartContentsContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByTestId('total').textContent).toMatch('Total: $264.5')
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