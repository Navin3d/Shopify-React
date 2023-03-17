import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';

import './App.css';


const INITIALPRODUCTS = [
  {
    imageUrl: "",
    title: "",
    price: 1.0
  }
];

const App = () => {

  const [products, setProducts] = useState(INITIALPRODUCTS);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/api/products");
    setProducts(response.data["data"]);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 style={{ textAlign: "center", color: "white" }}>Products</h1>
        <div class="row">
          {
            products.map(product => <Card imageUrl={product.imageUrl} title={product.title} price={product.price} />)
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
