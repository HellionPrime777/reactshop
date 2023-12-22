import Layout from "../component/layout/layout";
import React, { useState, useEffect } from 'react';
import '../css/owl.carousel.css';
import '../css/responsive.css';
import '../css/style.css';
import { Link } from 'react-router-dom';




function Card() {

  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);


    useEffect(() => {
      // Викликаємо API для отримання даних з сервера
      fetch('http://localhost:8000/api/product')
          .then(res => res.json())
          .then(json => setProducts(json));
  }, []);

  const handleProductClick = (productId) => {
      // Обробник кліку по продукту
      // Встановлюємо ідентифікатор вибраного продукту
      setSelectedProductId(productId);
  };

  return (
    <Layout>

<div className="single-product-area">
                {/* Решта вашого коду */}
                {/* ... */}

                <div className="col-md-8">
                    <div className="product-content-right">
                        {/* Решта вашого коду */}
                        {/* ... */}

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="product-images">
                                    {/* Використовуємо лише вибраний продукт за його id */}
                                    {products
                                        .filter(product => product.id === selectedProductId)
                                        .map((product) => (
                                            <div key={product.id}>
                                                {/* Основне зображення */}
                                                <div className="product-main-img">
                                                    <img src={`/images/${product.image}`} alt={product.name} />
                                                </div>

                                                {/* Галерея зображень */}
                                                <div className="product-gallery">
                                                    {[1, 2, 3, 4, 5].map((index) => (
                                                        <img key={index} src={`/images/${product.image}`} alt={product.name} />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                            {/* Решта вашого коду */}
                            {/* ... */}
                        </div>

                    </div>
                </div>
            </div>

<div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-sidebar">
                <h2 className="sidebar-title">Search Products</h2>
                <form action="">
                  <input type="text" placeholder="Search products..."></input>
                  <input type="submit" value="Search"></input>
                </form>
              </div>






              <div className="single-sidebar">
                <h2 className="sidebar-title">Products</h2>
                {products.map((product) => (
                  <div className="thubmnail-recent" key={product.id}>
                    <img src={`/images/${product.image}`} className="recent-thumb" alt={product.name}></img>
                    <h2><a href="/card">{product.name}</a></h2>
                    <div className="product-sidebar-price">
                      <ins>${product.price}</ins> <del>${product.discounted_price}</del>
                    </div>
                   
                  </div>
                ))}
              </div>
                    
                    <div className="single-sidebar">
                        <h2 className="sidebar-title">Recent Posts</h2>
                        <ul>
                            <li><a href="/card">Apple - 2023</a></li>
                            <li><a href="/card">Apple - 2023</a></li>
                            <li><a href="/card">Apple - 2023</a></li>
                            <li><a href="/card">Apple - 2023</a></li>
                            <li><a href="/card">Apple - 2023</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-8">
                    <div className="product-content-right">
                        <div className="product-breadcroumb">
                            <a href="/card">Home</a>
                            <a href="/card">Category Name</a>
                            <a href="/card">Apple - 2023</a>
                        </div>
                        
                        <div className="row">
          <div className="col-sm-6">
            <div className="product-images">
              {products.map((product) => (
                <div key={product.id}>
                  {/* Основне зображення */}
                  <div className="product-main-img">
                    <img src={`/images/${product.image}`} alt={product.name} />
                  </div>

                  {/* Галерея зображень */}
                  <div className="product-gallery">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <img key={index} src={`/images/${product.image}`} alt={product.name} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
                            
                            <div className="col-sm-6">
                                <div className="product-inner">
                                    <h2 className="product-name">Apple Iphone 15 - 2023</h2>
                                    <div className="product-inner-price">
                                        <ins>$1000.00</ins> <del>$1200.00</del>
                                    </div>    
                                    
                                    <form action="" className="cart">
                                        <div className="quantity">
                                            <input type="number" size="4" className="input-text qty text" title="Qty" value="1" name="quantity" min="1" step="1"></input>
                                        </div>
                                        <button className="add_to_cart_button" type="submit">Add to cart</button>
                                    </form>   
                                    
                                    <div className="product-inner-category">
                                        <p>Category: <a href="/DeliveryPayment">Summer</a>. Tags: <a href="/card">awesome</a>, <a href="/card">best</a>, <a href="/card">sale</a>, <a href="/card">shoes</a>. </p>
                                    </div> 
                                    
                                    <div role="tabpanel">
                                        <ul className="product-tab" role="tablist">
                                            <li role="presentation" className="active"><a href="/card" aria-controls="home" role="tab" data-toggle="tab">Description</a></li>
                                            <li role="presentation"><a href="/card" aria-controls="profile" role="tab" data-toggle="tab">Reviews</a></li>
                                        </ul>
                                        <div className="tab-content">
                                            <div role="tabpanel" className="tab-pane fade in active" id="home">
                                                <h2>Product Description</h2>  
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.</p>

                                                <p>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.</p>
                                            </div>
                                            <div role="tabpanel" className="tab-pane fade" id="profile">
                                                <h2>Reviews</h2>
                                                <div className="submit-review">
                                                    <p><label for="name">Name</label> <input name="name" type="text"></input></p>
                                                    <p><label for="email">Email</label> <input name="email" type="email"></input></p>
                                                    <div className="rating-chooser">
                                                        <p>Your rating</p>

                                                        <div className="rating-wrap-post">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p><label for="review">Your review</label> <textarea name="review" id="" cols="30" rows="10"></textarea></p>
                                                    <p><input type="submit" value="Submit"></input></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                        
                        
                        <div className="related-products-wrapper">
                            <h2 className="related-products-title">Related Products</h2>
                            <div className="related-products-carousel">
                                <div className="single-product">
                                    <div className="product-f-image">
                                        {/* <img src={images['41.webp']} alt=""></img> */}
                                        <div className="product-hover">
                                            <a href="/card" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="/card" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="/card">Sumsung - 2023</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$700.00</ins> <del>$800.00</del>
                                    </div> 
                                </div>
                                <div className="single-product">
                                    <div className="product-f-image">
                                        {/* <img src={images['51.webp']} alt=""></img> */}
                                        <div className="product-hover">
                                            <a href="/card" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="/card" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="/card">Nokia 3310</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$700.00</ins> <del>$800.00</del>
                                    </div> 
                                </div>
                                                         
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  
   
    </Layout>
  );
}

export default Card;

