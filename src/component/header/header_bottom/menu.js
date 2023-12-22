import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import './menu.css';

function Menu() {

  return (
    <>
   <Navbar className="navbarMain" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto"> 
      <Nav.Link className='aMain' as={Link} to="/">Головна</Nav.Link>
      <Nav.Link className='aMain' as={Link} to="/CartProduct">Товари</Nav.Link>
      <Nav.Link className='aMain' as={Link} to="/card">Картка товару</Nav.Link>
      <Nav.Link className='aMain' as={Link} to="/contact">Контакти</Nav.Link>
      <Nav.Link className='aMain' as={Link} to="/about">Про нас</Nav.Link>
      <Nav.Link className='aMain' as={Link} to="/DeliveryPayment">Доставка і оплата</Nav.Link>
      <Nav.Link className='aMain' as={Link} to="/Admin">Admin Panel</Nav.Link>
      

    </Nav>
  </Navbar.Collapse>
</Navbar>

    </>
  );
}

export default Menu;