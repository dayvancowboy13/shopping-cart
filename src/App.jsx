import { useState, useEffect, useContext, createContext } from 'react'
import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { ProductDataContext } from './components/ProductDataContext';


function App() {
  // const [cartItems, setCartItems] = useState(0);
  const [productData, setProductData] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching product data');
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProductData([...json]))
    // .then(json => console.log(json))
    // return () => setLoading(false);

  }, [])

  return (
    <>
      <Header />
      <ProductDataContext.Provider value={productData}>
        <div className="main-container" data-testid='main-container'>
          <Outlet />
        </div>
      </ProductDataContext.Provider>
      <Footer />
    </>
  )
}

export default App
