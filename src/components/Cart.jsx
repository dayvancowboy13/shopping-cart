import { useContext, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { ProductDataContext, CartContentsContext } from "./ProjectContexts";
import classes from './styles/Cart.module.css';
import { checkPriceDecimal, trimTextString } from "./UtilityFunctions";


export default function Cart({ cartVisible, setCartVisible }) {
    const { cartContents, removeFromCart } = useContext(CartContentsContext);
    const data = useContext(ProductDataContext);

    // bit clunky, but seems like the simplest way to update the item
    // qty on the cart as you press the buttons
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    let cartTotalPrice = cartContents.reduce((acc, elem) =>
        acc + (data[elem.id - 1].price * elem.qty), 0);

    function changeCount(id, itemQty, count) {
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
                <div className={classes.closeBtnContainer}>
                    <button className={classes.closeButton}
                        onClick={() => setCartVisible(false)}>×</button>
                </div>
                <div className={classes.cartContents}>
                    {cartContents.length === 0 ?
                        <p className={classes.cartEmpty}>Cart is empty</p> : null
                    }
                    {cartContents.map(elem => {
                        return (
                            <div className={classes.cartItemCard} key={elem.id}>
                                <div className={classes.productTitle}>{trimTextString(data[elem.id - 1].title)}</div>
                                <p className={classes.cardText}>Price: ${checkPriceDecimal(data[elem.id - 1].price)}</p>
                                <div className={classes.productQty}>
                                    <span>Quantity: {elem.qty}</span>
                                    <span className={classes.qtyBtns}>
                                        <button
                                            className={classes.adjustQty}
                                            onClick={() => {
                                                elem.qty = changeCount(elem.id, elem.qty, -1)
                                                forceUpdate();
                                            }
                                            }
                                            id='reduce-count'>-</button>
                                        <button
                                            className={classes.adjustQty}
                                            onClick={() => {
                                                elem.qty = changeCount(elem.id, elem.qty, +1)
                                                forceUpdate();
                                            }
                                            }
                                            id='increase-count'>+</button>
                                    </span></div>
                                <p className={classes.cardText}>Item Total: ${checkPriceDecimal(data[elem.id - 1].price * elem.qty)}</p>
                                <button className={classes.removeFromCart} onClick={() => removeFromCart(elem.id)}>
                                </button>
                            </div>
                        )
                    })}
                </div>
                <div className="cart-footer">
                    <h2 className={classes.cartSubtotal} data-testid='sub-total'>Subtotal: ${cartTotalPrice === 0 ? 0 : checkPriceDecimal(cartTotalPrice)}</h2>
                    <button className={classes.checkoutBtn}
                        onClick={() =>
                            alert("This functionality isn't part of the project :^)")
                        }>Checkout</button>
                </div>
            </div >
            <div className={classes.cartOverlay}>

            </div>
        </>
    );
}

Cart.propTypes = {
    cartVisible: PropTypes.bool,
    setCartVisible: PropTypes.func,
}