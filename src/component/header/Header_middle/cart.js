import React from 'react';
import { CartFill } from 'react-bootstrap-icons';
import Style from './search.module.css';
import { Link } from 'react-router-dom';
function Cart() {
  return (
    <Link to="/cart" className={`btn btn-primary ${Style.buttonCart}`}>
      <CartFill size={20} /> До кошика
    </Link>
  );
}

export default Cart;
