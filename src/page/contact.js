// Contacts.js
import React, { useState } from 'react';
import Layout from '../component/layout/layout';
import '../css/contact.css';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Форма відправлена з даними:', formData);
  };

  return (
    <Layout>
      <div className="maincontent-area">
        <div className="zigzag-bottom"></div>
        <div className="container contact-container">
          <div className="row">
          <div className="contact-info">
            <h3>Наше розміщення:</h3>
            <p>м. Київ, вулиця Опенкарт 23</p>
            <p>Телефон: 123456789</p>
            <p>Електронна пошта: example@email.com</p>
            <p>Факс: 123-456-789</p>
          </div>

          <div className="contact-form-container">
  <h2>Форма зв'язку</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name" className="form-label">Ваше ім'я:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="input-text" 
      />
    </div>
    <div className="form-group">
      <label htmlFor="email" className="form-label">E-Mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="input-email" 
      />
    </div>
    <div className="form-group">
      <label htmlFor="message" className="form-label">Запит:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="textarea" 
      ></textarea>
    </div>
    <button className="buttonSend" type="submit">Відправити</button>
  </form>
</div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contacts;
