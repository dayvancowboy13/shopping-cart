import { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductDataContext } from './ProjectContexts';
import classes from './styles/ShopPage.module.css';

export default function ShopPage() {
    console.log('displaying the shop page');

    const productData = useContext(ProductDataContext);

    // console.log(productData);

    if (productData !== undefined) {
        console.log('doing the thing!')
        return (
            <div data-testid='shop-page' className={classes.shopContainer}>
                {productData.map((product) => {
                    // console.log(product);
                    return (
                        <ProductCard key={product.id} data={product} />
                    )
                })}
            </div>
        );
    }
}