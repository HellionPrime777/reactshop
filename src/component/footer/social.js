import React from 'react';
import {
  Facebook, Twitter, Instagram,  Pinterest,
} from 'react-bootstrap-icons';

function Social() {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
        <Facebook size={24} />
      </a>
      <a href="https://www.twitter.com/your-twitter-page" target="_blank" rel="noopener noreferrer">
        <Twitter size={24} />
      </a>
      <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
        <Instagram size={24} />
      </a>
     
      <a href="https://www.pinterest.com/your-pinterest-page" target="_blank" rel="noopener noreferrer">
        <Pinterest size={24} />
      </a>
    
    </div>
  );
}

export default Social;
