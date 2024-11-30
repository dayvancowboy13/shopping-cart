import { useContext, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { ProductDataContext, CartContentsContext } from "./ProjectContexts";
import classes from './styles/Cart.module.css';
import { checkPriceDecimal } from "./UtilityFunctions";


export default function Cart({ cartVisible, setCartVisible }) {
    const { cartContents, removeFromCart } = useContext(CartContentsContext);
    const data = useContext(ProductDataContext);

    // bit clunky, but seems like the simplest way to update the item
    // qty on the cart as you press the buttons
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    let cartTotalPrice = cartContents.reduce((acc, elem) =>
        acc + (data[elem.id - 1].price * elem.qty), 0);

    console.log(cartContents);
    console.log(classes)

    function changeCount(id, itemQty, count) {
        console.log("changing the item quantity by " + count)
        if (itemQty + count >= 1 && (itemQty + count) <= 10) return itemQty + count;
        else if (itemQty + count === 0) {
            if (confirm("Remove item from cart?")) {
                removeFromCart(id);
                return 0;
            } else {
                return 1;
            }
        }
        else return itemQty;
    }


    return (
        <>
            <div data-testid='cart-main' className={cartVisible ? (classes.show)
                : (classes.hide)}>
                <div><button onClick={() => setCartVisible(false)}>×</button></div>
                <div className="cart-contents">
                    {cartContents.map(elem => {
                        return (
                            <div key={elem.id}>
                                {console.log(elem.qty)}
                                {data[elem.id - 1].title}
                                <p>Quantity: {elem.qty}</p>
                                <button
                                    onClick={() => {
                                        elem.qty = changeCount(elem.id, elem.qty, -1)
                                        forceUpdate();
                                    }
                                    }
                                    id='reduce-count'>-</button>
                                <button
                                    onClick={() => {
                                        elem.qty = changeCount(elem.id, elem.qty, +1)
                                        forceUpdate();
                                    }
                                    }
                                    id='increase-count'>+</button>
                                <p>Item price: ${checkPriceDecimal(data[elem.id - 1].price)}</p>
                                <p>Item Total: ${checkPriceDecimal(data[elem.id - 1].price * elem.qty)}</p>
                                <button onClick={() => removeFromCart(elem.id)}>Remove item</button>
                            </div>
                        )
                    })}
                </div>
                <div className="cart-footer">
                    <h2 data-testid='sub-total'>Subtotal: ${cartTotalPrice === 0 ? 0 : checkPriceDecimal(cartTotalPrice)}</h2>
                    <button>Checkout</button>
                </div>
            </div>
            <div className={classes.cartOverlay}>

            </div>
        </>
    );
}

Cart.propTypes = {
    cartVisible: PropTypes.bool,
    setCartVisible: PropTypes.func,
}