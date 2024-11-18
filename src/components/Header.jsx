import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContentsContext } from './ProjectContexts';

export default function Header() {
    const { cartContents } = useContext(CartContentsContext)
    // need to tally up the qty of each item:
    // const itemsInCart = cartContents
    return (
        <>
            <header>
                <div className='logo-container'>Logo Here</div>
                <nav>
                    <ul>
                        <li><Link to='home'>Home</Link></li>
                        <li><Link to='shop'>Shop</Link></li>
                        <li>Cart ({cartContents.length})</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}