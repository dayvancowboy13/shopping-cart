import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header>
                <div className='logo-container'>Logo Here</div>
                <nav>
                    <ul>
                        <li><Link to='home'>Home</Link></li>
                        <li><Link to='shop'>Shop</Link></li>
                        <li>Cart (0)</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}