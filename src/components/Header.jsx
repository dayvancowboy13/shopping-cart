import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContentsContext } from './ProjectContexts';

export default function Header() {
    const { cartContents } = useContext(CartContentsContext)

    const itemsInCart = cartContents.reduce(
        (acc, elem) => +acc + elem.qty, 0);
    return (
        <>
            <header>
                <div className='logo-container'>Logo Here</div>
                <nav>
                    <ul>
                        <li><Link to='home'>Home</Link></li>
                        <li><Link to='shop'>Shop</Link></li>
                        <li>Cart ({itemsInCart})</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}