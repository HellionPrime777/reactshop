import Layout from "../component/layout/layout";
import { Link } from "react-router-dom";
import images from './images';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

let products = [
  {
    id: 1,
    name: 'Apple ',
    price: 899.00,
    discountedPrice: 999.00,
    image: images['1.webp'],
  },
  {
    id: 2,
    name: 'Sumsung',
    price: 799.00,
    discountedPrice: 899.00,
    image: images['21.webp'],
  },
  {
    id: 3,
    name: 'Motorola',
    price: 699.00,
    discountedPrice: 799.00,
    image: images['31.webp'],
  },
  {
    id: 3,
    name: 'ZTE',
    price: 699.00,
    discountedPrice: 799.00,
    image: images['41.webp'],
  },
  {
    id: 1,
    name: 'Huawei',
    price: 899.00,
    discountedPrice: 999.00,
    image: images['51.webp'],
  },
  {
    id: 2,
    name: 'Xiomi',
    price: 799.00,
    discountedPrice: 899.00,
    image: images['74.webp'],
  },
  {
    id: 3,
    name: 'BlackBery',
    price: 699.00,
    discountedPrice: 799.00,
    image: images['71.webp'],
  },
  {
    id: 3,
    name: 'Nokia',
    price: 699.00,
    discountedPrice: 799.00,
    image: images['3.webp'],
  },
  // Додайте інші продукти сюди
];

const imageStyle = {
  width: '200px',  
  height: '350px', 
  border: '2px',
  
};
const swiperContainer = {
  display: "flex",
justifyContent: "center",
alignItems: "center",
}

function ProductCard({ product }) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="single-shop-product">
        <div className="product-upper">
          <img src={product.image} alt={product.name} />
        </div>
        <h2>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h2>
        <div className="product-carousel-price">
          <ins>${product.price}</ins> <del>${product.discountedPrice}</del>
        </div>
        <div className="product-option-shop">
          <Link to={`/product/${product.id}`} className="add_to_cart_button">
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}


function CartProduct() {


  return (
    <Layout>
       <Swiper 
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={0}
         slidesPerView={1}
         centeredSlides={true}
         navigation={{ clickable: true }}
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide style={swiperContainer}>
            <img
               src={images['21.webp']}
              alt="Slide 1"
              style={imageStyle}
            />
          </SwiperSlide >
          <SwiperSlide style={swiperContainer}>
            <img
              src={images['1.webp']}
              alt="Slide 2"
              style={imageStyle}
            />
          </SwiperSlide >
          <SwiperSlide style={swiperContainer}>
            <img
               src={images['31.webp']}
              alt="Slide 3"
              style={imageStyle}
            />
          </SwiperSlide>
          <SwiperSlide style={swiperContainer}>
            <img
               src={images['41.webp']}
              alt="Slide 4"
              style={imageStyle}
            />
          </SwiperSlide>
          <SwiperSlide style={swiperContainer}>
            <img
               src={images['51.webp']}
              alt="Slide 4"
              style={imageStyle}
            />
          </SwiperSlide>
          
        </Swiper>

      <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
          <div class="row">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CartProduct;
