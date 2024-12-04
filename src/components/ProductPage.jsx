import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductDataContext } from "./ProjectContexts";
import AddToCartElement from "./AddToCartElement";
import { checkPriceDecimal } from "./UtilityFunctions";
import classes from './styles/ProductPage.module.css';




export default function ProductPage() {
    // load the data for the given product
    let { productID } = useParams();
    productID = productID.replaceAll('product', '')
    const data = useContext(ProductDataContext)[productID - 1];


    console.log(data)

    return (
        <div className={classes.productContainer}>
            <div className={classes.imageContainer}><img className={classes.productImg} src={data.image} /></div>
            <div className={classes.productInfo}>
                <h1>{data.title}</h1>
                <p>{data.description}.</p>
                <h2>Price: ${checkPriceDecimal(data.price)}</h2>
                <AddToCartElement productID={productID} />
            </div>
        </div>
    )
}