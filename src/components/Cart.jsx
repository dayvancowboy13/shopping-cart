import { useContext } from "react";
import { ProductDataContext, CartContentsContext } from "./ProjectContexts";

export default function Cart() {
    const { cartContents, removeFromCart } = useContext(CartContentsContext);
    const data = useContext(ProductDataContext)
    // how to "show" the cart? :thinking:

    console.log(cartContents);

    let cartTotalPrice = cartContents.reduce((acc, elem) =>
        acc + (data[elem.id].price * elem.qty), 0)

    console.log(cartTotalPrice)


    return (
        <div className="cart-slider">
            <p>This will slide in or something to show the cart :)</p>
            <div className="cart-contents">
                {cartContents.map(elem => {
                    return (
                        <div key={elem.id}>
                            {data[elem.id].title}
                            <p>Quantity: {elem.qty}</p>
                            <p>Total: ${data[elem.id].price * elem.qty}</p>
                            <button onClick={() => removeFromCart(elem.id)}>Remove item</button>
                        </div>
                    )
                })}
            </div>
            <div className="cart-footer">
                <h2>Total: ${cartTotalPrice}</h2>
                <button>Checkout</button>
            </div>
        </div>
    );
}