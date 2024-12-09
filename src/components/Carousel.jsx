import classes from './styles/Carousel.module.css';
import { useState, useContext, useEffect } from 'react';
import { ProductDataContext } from './ProjectContexts';
import ProductCard from './ProductCard';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [randomIndeces, setRandomIndeces] = useState([])
    const productData = useContext(ProductDataContext);
    // get 3 random indeces to display, no repeats

    useEffect(() => {
        let tempArray = [];

        for (let k = 0; k < 20; k++) {
            tempArray.push(k);
        }

        let i = 20;
        let j = 0;
        let temp;

        while (i--) {
            j = Math.floor(Math.random() * i);

            temp = tempArray[i];
            tempArray[i] = tempArray[j];
            tempArray[j] = temp;
        }

        setRandomIndeces(tempArray.slice(0, 3));
    }, []);

    function cycleCarousel(num) {
        if (currentIndex + num >= randomIndeces.length) setCurrentIndex(0);
        else if (currentIndex + num < 0) setCurrentIndex(2);
        else setCurrentIndex(currentIndex + num);
    }

    return (
        <>
            <div className={classes.carouselContainer}>
                <h1 className={classes.featuredTitle}>Featured Products:</h1>
                <div className={classes.featuredItems}>
                    <button className={classes.carouselButton} onClick={() => cycleCarousel(-1)} >
                        <img src='../../images/svg/chevron_left.svg' />
                    </button>
                    {productData !== null ?
                        <div className={classes.productCard}>
                            <ProductCard key={productData[randomIndeces[currentIndex]].id} data={productData[randomIndeces[currentIndex]]} />
                        </div> :
                        <p>loading...</p>}
                    <button className={classes.carouselButton} onClick={() => cycleCarousel(1)} >
                        <img src='../../images/svg/chevron_right.svg' />
                    </button>

                </div>
            </div>
        </>
    )
}