import { useContext } from "react";
import { ProductDataContext, CartContentsContext } from "./ProjectContexts";

export default function Cart() {
    const { cartContents, removeFromCart } = useContext(CartContentsContext);
    const data = useContext(ProductDataContext)
    // how to "show" the cart? :thinking:

    console.log(cartContents);

    let cartTotalPrice = cartContents.reduce((acc, elem) =>
        acc + (data[elem.id - 1].price * elem.qty), 0)

    // console.log(cartTotalPrice)

    function checkPriceDecimal(price) {
        price = "" + price;
        if (price === undefined) return;
        if (price.split('.').length === 1) {
            return (price + ".00");
        }
        if (price.split('.')[1].length === 2) return price;
        else if (price.split('.')[1].length === 1) {
            return (price + "0");
        }
        else if (price.split('.')[1].length > 2) {
            let wholeNumber = price.split('.')[0];
            let decimal = price.split('.')[1];

            return (wholeNumber + decimal[0] + decimal[1])
        }
    }


    return (
        <div data-testid='cart-main' className="cart-slider">
            <p>This will slide in or something to show the cart</p>
            <div className="cart-contents">
                {cartContents.map(elem => {
                    return (
                        <div key={elem.id}>
                            {data[elem.id - 1].title}
                            <p>Quantity: {elem.qty}</p>
                            <p>Item price: ${checkPriceDecimal(data[elem.id - 1].price)}</p>
                            <p>Item Total: ${checkPriceDecimal(data[elem.id - 1].price * elem.qty)}</p>
                            <button onClick={() => removeFromCart(elem.id)}>Remove item</button>
                        </div>
                    )
                })}
            </div>
            <div className="cart-footer">
                <h2 data-testid='total'>Total: ${cartTotalPrice === 0 ? 0 : checkPriceDecimal(cartTotalPrice)}</h2>
                <button>Checkout</button>
            </div>
        </div>
    );
}