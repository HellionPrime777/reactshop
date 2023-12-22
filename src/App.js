
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./page/home"
import CartProduct from "./page/cartProduct";

import Category from "./page/about";
import Checkout from "./page/checkout";
import Contact from "./page/contact";
import DeliveryPayment from "./page/deliveryPayment";
import Card from "./page/card";
import Admin from "./page/admin";
import Cart from "./page/cart";
import Product from "./page/cartProduct";

import { useState, useEffect } from 'react';
//import { Cart } from "react-bootstrap-icons";


function App() {

  const [products, setProducts] = useState([]);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/product')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const addProduct = () => {
    const name = newName.trim();

    if (name) {
      fetch('http://127.0.0.1:8000/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'charset': 'utf-8',
        },
        body: JSON.stringify({
          name,
        }),
      })
        .then(response => response.json())
        .then(data => {
          setProducts([...products, data]);
          setNewName('');
        });
    }
  };

  const updateProduct = (id) => {
    const product = products.find(product => product.id === id);
    fetch(`http://127.0.0.1:8000/api/product/${id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
        'charset': 'utf-8',
      },
    })
      .then(res => res.json());
  };

  const deleteProduct = (id) => {
    fetch(`http://127.0.0.1:8000/api/product/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(() => {
        setProducts(values => values.filter(product => product.id !== id));
      });
  };

  const onChangeHandler = (id, key, value) => {
    setProducts(values => {
      return values.map(product => {
        if (product.id === id) {
          return { ...product, [key]: value };
        }
        return product;
      });
    });
  };




  return (

    
    <BrowserRouter>
      <Routes>
        
        <Route path= "/" element={  <Home/>}/>
        <Route path= "/CartProduct" element={<CartProduct/>}/>
        <Route path= "/card" element={<Card/>}/>
        <Route path= "/cart" element={<Cart/>}/>
        <Route path= "/about" element={  <Category/>}/>
        <Route path= "/Checkout" element={  <Checkout/>}/>
        <Route path= "/Contact" element={  <Contact/>}/>
        <Route path= "/DeliveryPayment" element={  <DeliveryPayment/>}/>
        <Route path="/product/:id" element={<Product />} />
        <Route path= "/Admin" element={  <Admin/>}/>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
