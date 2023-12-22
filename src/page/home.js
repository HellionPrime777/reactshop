import React, { useState, useEffect } from 'react';
import Layout from "../component/layout/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Викликаємо API для отримання даних з сервера
    fetch('http://localhost:8000/api/product')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  useEffect(() => {
    // Викликаємо API для отримання даних з сервера
    fetch('http://localhost:8000/api/brand')
      .then(res => res.json())
      .then(json => setBrands(json));
  }, []);

  const imageStyle = {
    width: '270px',
    height: '450px',
    border: '2px',
  };

  const swiperContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyleLogo = {
    width: '200px',
    height: '200px',
    border: '2px',
  };

  const swiperContainerLogo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

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
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product) => (
          <SwiperSlide style={swiperContainer} key={product.id}>
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
              <div className="col-md-3 col-sm-6" key={product.id}>
                <div className="single-shop-product">
                  <div className="product-upper">
                    <img  src={`/images/${product.image}`} alt={product.name} />
                  </div>
                  <h2>
                    <a href="/card">{product.name}</a>
                  </h2>
                  <div className="product-carousel-price">
                    <ins>${product.price}</ins> <del>${product.discountedPrice}</del>
                  </div>
                  <div className="product-option-shop">
                    <a
                      className="add_to_cart_button"
                      data-quantity="1"
                      data-product_sku=""
                      data-product_id={product.id}
                      rel="nofollow"
                      href="/card"
                    >
                      Add to card
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={4}
              centeredSlides={true}
              navigation={{ clickable: true }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {brands.map((brand) => (
                <SwiperSlide style={swiperContainerLogo} key={brand.id}>
                  <img
                     src={`/images/${brand.image}`}
                    alt={brand.name}
                    style={imageStyleLogo}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
