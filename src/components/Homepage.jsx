import Carousel from "./Carousel";
import classes from './styles/Homepage.module.css';

export default function Homepage() {
    return (
        <div data-testid='homepage' className={classes.homeContainer}>
            <div className={classes.homepageWelcome}>
                <h1>Welcome to Smpl Shop</h1>
                <h2>A smplr, more elegent way to shop.</h2>
                <p>Smpl Shop is designed to provide an intuitive shopping experience, because we know life is already complicated enough.</p>
            </div>
            <Carousel />
        </div>
    );
}