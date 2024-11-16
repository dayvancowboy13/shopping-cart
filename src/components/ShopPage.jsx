import { useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductDataContext } from './ProductDataContext';

export default function ShopPage() {
    console.log('displaying the shop page');

    const productData = useContext(ProductDataContext);

    // console.log(productData);

    if (productData !== undefined) {
        console.log('doing the thing!')
        return (
            <div data-testid='shop-page'>
                {productData.map((product) => {
                    console.log(product);
                    return (
                        <ProductCard key={product.id} data={product} />
                    )
                })}
            </div>
        );
    }
}