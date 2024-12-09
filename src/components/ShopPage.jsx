import { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductDataContext } from './ProjectContexts';
import classes from './styles/ShopPage.module.css';

export default function ShopPage() {
    const productData = useContext(ProductDataContext);

    if (productData !== undefined) {
        return (
            <div data-testid='shop-page' className={classes.shopContainer}>
                {productData.map((product) => {
                    return (
                        <ProductCard key={product.id} data={product} />
                    )
                })}
            </div>
        );
    }
}