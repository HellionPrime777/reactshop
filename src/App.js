
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./page/home"
import CartProduct from "./page/cartProduct";

import Category from "./page/about";
import Checkout from "./page/checkout";
import Contact from "./page/contact";
import DeliveryPayment from "./page/deliveryPayment";
import Card from "./page/card";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={  <Home/>}/>
        <Route path= "/CartProduct" element={<CartProduct/>}/>
        <Route path= "/card" element={<Card/>}/>
        <Route path= "/about" element={  <Category/>}/>
        <Route path= "/Checkout" element={  <Checkout/>}/>
        <Route path= "/Contact" element={  <Contact/>}/>
        <Route path= "/DeliveryPayment" element={  <DeliveryPayment/>}/>
        <Route path="/product/:id" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// :id(\d+)