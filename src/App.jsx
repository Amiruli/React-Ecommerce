import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/order/OrdersPage'
import './App.css'


function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => { 
    axios.get("/api/cart-items?expand=product").then((response) => {
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
