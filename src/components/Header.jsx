import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContentsContext } from './ProjectContexts';
import classes from './styles/Header.module.css'

export default function Header({ showCart }) {
    const { cartContents } = useContext(CartContentsContext)

    const itemsInCart = cartContents.reduce(
        (acc, elem) => +acc + elem.qty, 0);
    return (
        <>
            <header className={classes.header}>
                <div className={classes.logoContainer}>Smpl Shop</div>
                <nav>
                    <ul>
                        <li className={classes.headLink}><Link className='testing' to='home'>Home</Link></li>
                        <li className={classes.headLink}><Link to='shop'>Shop</Link></li>
                        <li>
                            <button className={classes.cartBtn} onClick={() => showCart()}>
                                <img src='../../images/svg/shopping_cart.svg' />
                                <div className={classes.cartItemCount} data-count={itemsInCart}>
                                    {itemsInCart}
                                </div>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}