import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductDataContext } from "./ProjectContexts";
import { checkPriceDecimal } from "./UtilityFunctions";
import AddToCartElement from "./AddToCartElement";
import classes from './styles/ProductPage.module.css';

export default function ProductPage() {
    let { productID } = useParams();
    productID = productID.replaceAll('product', '')
    const data = useContext(ProductDataContext)[productID - 1];

    return (
        <div className={classes.productContainer}>
            <div className={classes.imageContainer}>
                <img className={classes.productImg} src={data.image} />
            </div>
            <div className={classes.productInfo}>
                <h1>{data.title}</h1>
                <p>{data.description}.</p>
                <h2>Price: ${checkPriceDecimal(data.price)}</h2>
                <AddToCartElement productID={productID} />
            </div>
        </div>
    )
}