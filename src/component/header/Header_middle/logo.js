import React from 'react';
import logoImage from '../../../images/logo.avif'; 
import './logo.css';

function Logo() {
  return (
    <img src={logoImage} alt="Логотип" className='logo' />
  );
}

export default Logo;