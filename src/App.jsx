import { useState, useEffect, } from 'react'
import { Outlet } from 'react-router-dom';
import { ProductDataContext, CartContentsContext } from './components/ProjectContexts';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';


function App() {
  const [productData, setProductData] = useState(null);
  const [cartContents, setCartContents] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    console.log('Fetching product data');
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProductData([...json]));
  }, [])

  function addToCart(productID, quantity) {
    let tempCart = [...cartContents];
    tempCart.push({ id: productID, qty: quantity });
    setCartContents(tempCart);
  }

  function removeFromCart(productID) {
    let tempCart = [...cartContents];
    setCartContents(tempCart.filter((elem) => elem.id !== productID));
  }

  function showCart() {
    setCartVisible(true);
  }

  return (
    <>
      <CartContentsContext.Provider value={{ cartContents, addToCart, removeFromCart }}>
        <ProductDataContext.Provider value={productData}>
          <div className={cartVisible ? 'overlay show' : 'overlay'} onClick={() => setCartVisible(false)}></div>
          <Cart cartVisible={cartVisible} setCartVisible={setCartVisible} />
          <Header showCart={showCart} />
          <div className="main-container" data-testid='main-container'>
            <Outlet />
          </div>
        </ProductDataContext.Provider>
      </CartContentsContext.Provider>
      <Footer />
    </>
  )
}

export default App
