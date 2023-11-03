import React from 'react';
import { CartFill } from 'react-bootstrap-icons';
import Style from './search.module.css';

function Cart() {
  return (
    <a href="/cart" className={`btn btn-primary ${Style.buttonCart}`}>
      <CartFill size={20} /> До кошика
    </a>
  );
}

export default Cart;
