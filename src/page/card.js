import Layout from "../component/layout/layout";
import React from 'react';
// import { useParams } from "react-router-dom";
import '../css/owl.carousel.css';
import '../css/responsive.css';
import '../css/style.css';
import images from './images';
// import products from './cartProduct'




function Card() {

    // const { id } = useParams();
    // const product = products.find((p) => p.id === Number(id));
  
    // if (!product) {
    //   return <div>Такого продукту не знайдено</div>;
    // }

  return (
    <Layout>

{/* <div className="single-product-area">

        <h2>{product.name}</h2>
        <p>Ціна: ${product.price}</p>
        <p>Знижена ціна: ${product.discountedPrice}</p>
        <img src={product.image} alt={product.name} />

      </div> */}


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
                        <div className="thubmnail-recent">
                            <img src={images['21.webp']} className="recent-thumb" alt=""></img>
                            <h2><a href="/card">Apple - 2023</a></h2>
                            <div className="product-sidebar-price">
                                <ins>$1000.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                        <div className="thubmnail-recent">
                            <img src={images['1.webp']} className="recent-thumb" alt=""></img>
                            <h2><a href="/card">Sumsung - 2022</a></h2>
                            <div className="product-sidebar-price">
                                <ins>$1100.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                        <div className="thubmnail-recent">
                            <img src={images['31.webp']} className="recent-thumb" alt=""></img>
                            <h2><a href="/card">ZTE - 2023</a></h2>
                            <div className="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
                        <div className="thubmnail-recent">
                            <img src={images['41.webp']} className="recent-thumb" alt=""></img>
                            <h2><a href="/card">Huawey - 2022</a></h2>
                            <div className="product-sidebar-price">
                                <ins>$700.00</ins> <del>$800.00</del>
                            </div>                             
                        </div>
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
                                    <div className="product-main-img">
                                        <img src={images['1.webp']} alt=""></img>
                                    </div>
                                    
                                    <div className="product-gallery">
                                        <img src={images['2.webp']} alt=""></img>
                                        <img src={images['3.webp']} alt=""></img>
                                        <img src={images['4.webp']} alt=""></img>
                                        <img src={images['5.webp']} alt=""></img>
                                    </div>
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
                                        <img src={images['41.webp']} alt=""></img>
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
                                        <img src={images['51.webp']} alt=""></img>
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

