import React, { useState, useEffect } from 'react';
import Layout from "../component/layout/layout";
import '../css/about.css';

function Admin() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    discounted_price: 0,
    image: '',
  });

  useEffect(() => {
    // Викликаємо API для отримання даних з сервера
    fetch('http://localhost:8000/api/product')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Відправляємо запит на створення або оновлення продукта
    fetch('http://localhost:8000/api/product', {
      method: 'POST', // або 'PUT' для оновлення
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(json => {
        setProducts(json);

        // Очищуємо дані форми
        setFormData({
          name: '',
          price: 0,
          discounted_price: 0,
          image: '',
        });
      });
  };

  const handleEdit = (id) => {
    // Редагуємо продукт зазначеного id
    const editedProduct = products.find(product => product.id === id);
    setFormData({
      name: editedProduct.name,
      price: editedProduct.price,
      discounted_price: editedProduct.discounted_price,
      image: editedProduct.image,
    });
  };

  const handleDelete = (id) => {
    // Видаляємо продукт зазначеного id
    fetch(`http://localhost:8000/api/product/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(json => setProducts(json));
  };

  return (
    <>
      <Layout>
        <div className="admin-form" style={{ marginLeft: '300px', marginTop: '30px'}}>
          <h2>Add Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Name:</label>
              <input
                type="text"
                id="productName"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">Price:</label>
              <input
                type="number"
                id="productPrice"
                className="form-control"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productDiscountedPrice" className="form-label">Discounted Price:</label>
              <input
                type="number"
                id="productDiscountedPrice"
                className="form-control"
                name="discounted_price"
                value={formData.discounted_price}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">Image URL:</label>
              <input
                type="text"
                id="productImage"
                className="form-control"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        <div className="product-list mt-5" style={{ marginLeft: '300px', marginTop: '30px'}}>
          <h2>Product List</h2>
          <ul className="list-group">
            {products.map(product => (
              <li key={product.id} className="list-group-item">
                <strong>{product.name}</strong>
                <br />
                Price: ${product.price}
                <br />
                Discounted Price: ${product.discounted_price}
                <br />
                <img src={`/images/${product.image}`} alt={product.name} style={{ width: '100px', height: '150px' }} />
                <div className="mt-3">
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(product.id)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}

export default Admin;
