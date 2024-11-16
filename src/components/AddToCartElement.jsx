import { useState } from "react";

export default function AddToCartElement() {
    const [productCount, setProductCount] = useState(0)

    function changeCount(amt) {
        if ((productCount + amt) < 0) return;
        else if ((productCount + amt) > 10) return;
        setProductCount(productCount => productCount + amt)
    }

    function clickAddToCart() {
        if (productCount === 0) alert("Can't add 0 items to cart!");
        else console.log("Adding item to cart")
    }

    console.log(`Product Count: ${productCount}`)

    return (
        <>
            <p>this lets the user add the item to the cart</p>
            <button
                onClick={() => changeCount(-1)}
                id='reduce-count'>-</button>
            <input id='product-count' type='number' defaultValue={0} value={productCount} />
            <button
                onClick={() => changeCount(+1)}
                id='increase-count'>+</button>
            <button id='add-to-cart'
                onClick={clickAddToCart}>Add to Cart</button>
        </>
    );
}