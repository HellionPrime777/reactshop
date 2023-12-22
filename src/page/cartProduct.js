import { Link } from "react-router-dom";
import Layout from "../component/layout/layout";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const imageStyle = {
  width: '200px',
  height: '350px',
  border: '2px',
};

function ProductCard({ product }) {
  const navigate = useNavigate();

  const addToCart = () => {
    // Тут ви можете додати логіку для створення ордера та відправки на сервер
    // Наприклад, відправити POST-запит на endpoint для створення ордера
    fetch('http://localhost:8000/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: product.name,
        price: product.price,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Order created:', data);
      // Перенаправлення на сторінку корзини після успішного створення ордера
      navigate('/cart');
    })
    .catch(error => {
      console.error('Error creating order:', error);
    });
  };

  return (

      <div className="col-md-3 col-sm-6">
        <div className="single-shop-product">
          <div className="product-upper">
            <img src={`/images/${product.image}`} alt={product.name} style={imageStyle} />
          </div>
          <h2>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h2>
          <div className="product-carousel-price">
            <ins>${product.price}</ins> <del>${product.discountedPrice}</del>
          </div>
          <div className="product-option-shop">
            {/* Замініть a на onClick */}
            <button className="add_to_cart_button" onClick={addToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
}

function CartProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch('http://localhost:8000/api/product')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <Layout>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={true}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <img
              src={`/images/${product.image}`}
              alt={product.name}
              style={imageStyle}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CartProduct;
