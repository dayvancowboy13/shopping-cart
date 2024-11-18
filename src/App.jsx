import { useState, useEffect, } from 'react'
import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { ProductDataContext, CartContentsContext } from './components/ProjectContexts';


function App() {
  const [productData, setProductData] = useState(null);
  const [cartContents, setCartContents] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching product data');
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProductData([...json]))
    // .then(json => console.log(json))
    // return () => setLoading(false);

  }, [])

  function addToCart(productID, quantity) {
    // need to add check if the item is already in the cart, then either
    // add or update the qty of that item if the user tries to add more
    console.log('Running addToCart function')
    let tempCart = [...cartContents];
    console.log(tempCart)
    tempCart.push({ id: productID, qty: quantity });
    setCartContents(tempCart);
  }

  return (
    <>
      <CartContentsContext.Provider value={{ cartContents, addToCart }}>
        <Header />
        <ProductDataContext.Provider value={productData}>
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
