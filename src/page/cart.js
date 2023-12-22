import React, { useState, useEffect } from 'react';
import Layout from "../component/layout/layout";

function Cart() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Завантажте список замовлень з сервера при завантаженні компонента
    fetch('http://localhost:8000/api/order')
      .then(res => res.json())
      .then(json => setOrders(json));
  }, []);

  const handleDelete = (id) => {
    // Видаляємо продукт зазначеного id
    fetch(`http://localhost:8000/api/order/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(json => setOrders(json));
  };

  const totalAmount = orders.reduce((total, order) => total + parseFloat(order.price), 0);


  return (
    <Layout>
      <div className="container">
        <h2>Корзина</h2>
        {orders.length === 0 ? (
          <p>Ваша корзина порожня.</p>
        ) : (
          <>
            <ul className="list-group">
              {orders.map((order, index) => (
                <li key={index} className="list-group-item">
                  <strong>{order.name}</strong>
                  <br />
                  Price: ${order.price}
                  <div className="mt-3">
                    <button className="btn btn-danger" onClick={() => handleDelete(order.id)}>
                      Видалити
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5">
            <strong>Загальна сума: ${totalAmount}</strong>
            <br></br><br></br><br></br><br></br>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Cart;