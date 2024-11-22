import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { CartContentsContext } from "./ProjectContexts";

export default function AddToCartElement(props) {
    const [productQuantity, setproductQuantity] = useState(0)

    const { cartContents, addToCart } = useContext(CartContentsContext);

    function changeCount(amt) {
        if ((productQuantity + amt) < 0) return;
        else if ((productQuantity + amt) > 10) return;
        setproductQuantity(productQuantity => productQuantity + amt);
    }

    function clickAddToCart() {
        if (productQuantity <= 0) {
            alert("Can't add 0 or negative items to cart!");
            return;
        }
        else if (productQuantity > 10) {
            alert('Sorry! Limit of 10 items per customer!');
            setproductQuantity(0);
            return;
        }
        else if (itemIsInCart()) {
            alert('That item is already in the cart!');
            setproductQuantity(0);
            return;
        }
        else console.log("Adding item to cart");
        // add new object to cartContext containing productID and its qty
        addToCart(+props.productID, productQuantity);
        setproductQuantity(0);
    }

    function itemIsInCart() {
        for (let i = 0; i < cartContents.length; i++) {
            if (cartContents[i].id === +props.productID) return true;
        }
    }

    console.log(`Product Count: ${productQuantity}`)

    return (
        <>
            <p>this lets the user add the item to the cart</p>
            <button
                onClick={() => changeCount(-1)}
                id='reduce-count'>-</button>
            <input onChange={(e) => setproductQuantity(+e.target.value)}
                onClick={(e) => {
                    e.target.value = null;
                }}
                id='product-count' type='number' value={productQuantity} />
            <button
                onClick={() => changeCount(+1)}
                id='increase-count'>+</button>
            <button id='add-to-cart'
                onClick={clickAddToCart}>Add to Cart</button>
        </>
    );
}

AddToCartElement.propTypes = {
    productID: PropTypes.string,
}