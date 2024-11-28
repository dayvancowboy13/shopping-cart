import { useContext } from "react";
import PropTypes from "prop-types";
import { ProductDataContext, CartContentsContext } from "./ProjectContexts";
import classes from './styles/Cart.module.css';
import { checkPriceDecimal } from "./UtilityFunctions";


export default function Cart({ cartVisible, setCartVisible }) {
    const { cartContents, removeFromCart } = useContext(CartContentsContext);
    const data = useContext(ProductDataContext)

    let cartTotalPrice = cartContents.reduce((acc, elem) =>
        acc + (data[elem.id - 1].price * elem.qty), 0);



    console.log(cartContents);
    console.log(classes)


    return (
        <>
            <div data-testid='cart-main' className={cartVisible ? (classes.show)
                : (classes.hide)}>
                <div><button onClick={() => setCartVisible(false)}>×</button></div>
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
            <div className={classes.cartOverlay}>

            </div>
        </>
    );
}

Cart.propTypes = {
    cartVisible: PropTypes.bool,
    setCartVisible: PropTypes.func,
}