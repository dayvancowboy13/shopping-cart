import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductDataContext } from "./ProjectContexts";
import AddToCartElement from "./AddToCartElement";
import { checkPriceDecimal } from "./UtilityFunctions";




export default function ProductPage() {
    // load the data for the given product
    let { productID } = useParams();
    productID = productID.replaceAll('product', '')
    const data = useContext(ProductDataContext)[productID - 1];


    console.log(data)

    return (
        <>
            <img src={data.image} />
            <h1>{data.title}</h1>
            <p>{data.description}.</p>
            <h2>Price: ${checkPriceDecimal(data.price)}</h2>
            <AddToCartElement productID={productID} />
        </>
    )
}