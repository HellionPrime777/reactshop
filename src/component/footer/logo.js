import React from 'react'
import logoImage from '../../images/logo.avif'; 
import '../header/Header_middle/logo.css';

function LogoFooter() {
  return (
    <img src={logoImage} alt="Логотип" className='logo' />
  );
}

export default LogoFooter;
