import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {

  // fetch('https://fakestoreapi.com/products/1')
  //   .then(res => res.json())
  //   .then(json => console.log(json))

  return (
    <>
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
