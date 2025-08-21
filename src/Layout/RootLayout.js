import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';



export default function RootLayout() {
  
    
     const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);

 
 useEffect(() => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  setCartCount(cartItems.length);
}, []);
  return (
    <>
    <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} cartCount={cartCount} />
    
    <div>
        <Outlet context={{searchTerm ,cartCount, setCartCount }}/>
         
        
    </div>
    <Footer />
    </>
  )
}
