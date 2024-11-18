import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductDataContext } from "./ProjectContexts";
import AddToCartElement from "./AddToCartElement";



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
            <p>This is just the page for the product {productID}.</p>
            <AddToCartElement productID={productID} />
        </>
    )
}