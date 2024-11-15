import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductDataContext } from "./ProductDataContext";


export default function ProductPage() {
    let { productID } = useParams();
    productID = productID.replaceAll('product', '')
    const data = useContext(ProductDataContext)[productID - 1];


    console.log(data)

    return (
        <>
            <h1>{data.title}</h1>
            <p>This is just the page for the product {productID}.</p>
        </>
    )
}