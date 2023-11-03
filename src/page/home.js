import Layout from "../component/layout/layout";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import images from './images';

function Home() {
  const imageStyle = {
    width: '270px',  
    height: '450px', 
    border: '2px',
    
  };
  const swiperContainer = {
    display: "flex",
  justifyContent: "center",
  alignItems: "center",
  }

  const imageStyleLogo = {
    width: '200px',  
    height: '200px', 
    border: '2px',
    
  };
  const swiperContainerLogo = {
    display: "flex",
  justifyContent: "center",
  alignItems: "center",
  }

  const products = [
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
  ];

  return (
    <>
      <Layout >
      
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




        <div className="single-product-area">
          <div className="zigzag-bottom"></div>
          <div className="container">
            <div className="row">
              {products.map((product) => (
                <div className="col-md-3 col-sm-6" key={product.id}>
                  <div className="single-shop-product">
                    <div className="product-upper">
                      <img src={product.image} alt={product.name} />
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
         <SwiperSlide style={swiperContainerLogo}>
            <img
               src={images['apple.webp']}
              alt="Slide 1"
              style={imageStyleLogo}
            />
          </SwiperSlide>
          <SwiperSlide style={swiperContainerLogo}>
            <img
               src={images['sum.jpeg']}
              alt="Slide 1"
              style={imageStyleLogo}
            />
          </SwiperSlide>
          <SwiperSlide style={swiperContainerLogo}>
            <img
               src={images['moto.jpeg']}
              alt="Slide 1"
              style={imageStyleLogo}
            />
          </SwiperSlide>
          <SwiperSlide style={swiperContainerLogo}>
            <img
               src={images['huawei.jpg']}
              alt="Slide 1"
              style={imageStyleLogo}
            />
          </SwiperSlide>
          <SwiperSlide style={swiperContainerLogo}>
            <img
               src={images['xiomi.png']}
              alt="Slide 1"
              style={imageStyleLogo}
            />
          </SwiperSlide>
          <SwiperSlide style={swiperContainerLogo}>
            <img
               src={images['zte.png']}
              alt="Slide 1"
              style={imageStyleLogo}
            />
          </SwiperSlide>

      </Swiper>
             </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
