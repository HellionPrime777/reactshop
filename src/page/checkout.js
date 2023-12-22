import React, { useState, useEffect } from 'react';
import Layout from "../component/layout/layout";

function Cart() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Ваш код для отримання замовлень з сервера
    fetch('http://localhost:8000/api/orders')
      .then(res => res.json())
      .then(json => setOrders(json));
  }, []);

  return (
    <Layout>
      <div className="container">
        <h2>Корзина</h2>
        {orders.length === 0 ? (
          <p>Ваша корзина порожня.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li key={order.id}>
                {order.name} - ${order.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}

export default Cart;