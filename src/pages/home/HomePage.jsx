import axios from "axios"
import { useEffect, useState } from "react"
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./Homepage.css";

export function HomePage({ cart = []}) {

  const [products, setProducts] = useState([]);  

  useEffect(() => { 
    const getProductData = async () => {
      const response = await axios.get("/api/products")
      setProducts(response.data);
    }
    
  getProductData()
    
  }, [])

  
  return (
    <>
      <title>React Ecommerce Project</title>

      <Header cart={ cart } />

      <div className="home-page">
        <ProductsGrid products={ products } />
      </div>
      
    </>
  );
}
