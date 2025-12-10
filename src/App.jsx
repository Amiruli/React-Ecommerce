import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import './App.css'


function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => { 
    axios.get("http://localhost:3000/api/cart-items").then((response) => {
      setCart(response.data);
      console.log(response.data);
    });
  }, []);
  

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={ cart } />} />
      <Route path="checkout" element={<CheckoutPage cart={ cart } />}></Route>
      <Route path="orders" element={<OrdersPage cart={ cart } />}></Route>
    </Routes>
    
  )
}

export default App
