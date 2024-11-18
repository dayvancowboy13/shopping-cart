import { useState, useEffect, } from 'react'
import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { ProductDataContext, CartContentsContext } from './components/ProjectContexts';
import Cart from './components/Cart';


function App() {
  const [productData, setProductData] = useState(null);
  const [cartContents, setCartContents] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching product data');
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProductData([...json]));
  }, [])

  function addToCart(productID, quantity) {
    // need to add check if the item is already in the cart, then either
    // add or update the qty of that item if the user tries to add more
    console.log('Running addToCart function')
    let tempCart = [...cartContents];
    // console.log(tempCart)
    tempCart.push({ id: productID, qty: quantity });
    setCartContents(tempCart);
  }

  function removeFromCart(productID) {
    console.log("Removing item from cart");
    let tempCart = [...cartContents];
    setCartContents(tempCart.filter((elem) => elem.id !== productID));
  }

  return (
    <>
      <CartContentsContext.Provider value={{ cartContents, addToCart, removeFromCart }}>
        <Header />
        <ProductDataContext.Provider value={productData}>
          <div className="main-container" data-testid='main-container'>
            <Outlet />
            <Cart />
          </div>
        </ProductDataContext.Provider>
      </CartContentsContext.Provider>
      <Footer />
    </>
  )
}

export default App
