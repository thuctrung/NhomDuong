import React, { Component } from 'react';
import Trending from '../Content/Trending';
import Navbar from '../Header/Navbar';
class Header extends Component {
    render() {
        return (
            <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Boutique | Ecommerce bootstrap template</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all,follow" />
        {/* Bootstrap CSS*/}
        <link rel="stylesheet" href="./vendor/bootstrap/css/bootstrap.min.css" />
        {/* Lightbox*/}
        <link rel="stylesheet" href="./vendor/lightbox2/css/lightbox.min.css" />
        {/* Range slider*/}
        <link rel="stylesheet" href="./vendor/nouislider/nouislider.min.css" />
        {/* Bootstrap select*/}
        <link rel="stylesheet" href="./vendor/bootstrap-select/css/bootstrap-select.min.css" />
        {/* Owl Carousel*/}
        <link rel="stylesheet" href="./vendor/owl.carousel2/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="./vendor/owl.carousel2/assets/owl.theme.default.css" />
        {/* Google fonts*/}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300;400;800&display=swap" />
        {/* theme stylesheet*/}
        <link rel="stylesheet" href="./css/style.default.css" id="theme-stylesheet" />
        {/* Custom stylesheet - for your changes*/}
        <link rel="stylesheet" href="./css/custom.css" />
        {/* Favicon*/}
        <link rel="shortcut icon" href="./img/favicon.png" />
        {/* Tweaks for older IEs*/}{/*[if lt IE 9]>
        
        <![endif]*/}
        <div className="page-holder">
          {/* navbar*/}
          <Navbar></Navbar>
          {/*  Modal */}
          <div className="modal fade" id="productView" tabIndex={-1} role="dialog" aria-hidden="true">
                  <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                  <div className="modal-content">
                      <div className="modal-body p-0">
                      <div className="row align-items-stretch">
                          <div className="col-lg-6 p-lg-0"><a className="product-view d-block h-100 bg-cover bg-center" style={{background: 'url(img/product-5.jpg)'}} href={this.props.img} data-lightbox="productview" title="Red digital smartwatch" /><a className="d-none" href="img/product-5-alt-1.jpg" title="Red digital smartwatch" data-lightbox="productview" /><a className="d-none" href="img/product-5-alt-2.jpg" title="Red digital smartwatch" data-lightbox="productview" /></div>
                          <div className="col-lg-6">
                          <button className="close p-4" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                          <div className="p-5 my-md-4">
                              <ul className="list-inline mb-2">
                              <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                              <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                              <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                              <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                              <li className="list-inline-item m-0"><i className="fas fa-star small text-warning" /></li>
                              </ul>
                              <h2 className="h4">{this.props.name}</h2>
                              <p className="text-muted">{this.props.price}</p>
                              <p className="text-small mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
                              <div className="row align-items-stretch mb-4">
                              <div className="col-sm-7 pr-sm-0">
                                  <div className="border d-flex align-items-center justify-content-between py-1 px-3"><span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                                  <div className="quantity">
                                      <button className="dec-btn p-0"><i className="fas fa-caret-left" /></button>
                                      <input className="form-control border-0 shadow-0 p-0" type="text" defaultValue={1} />
                                      <button className="inc-btn p-0"><i className="fas fa-caret-right" /></button>
                                  </div>
                                  </div>
                              </div>
                              <div className="col-sm-5 pl-sm-0"><a className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0" href="cart.html">Add to cart</a></div>
                              </div><a className="btn btn-link text-dark p-0" href="#"><i className="far fa-heart mr-2" />Add to wish list</a>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
          {/* HERO SECTION*/}
          <div className="container">
            {/* CATEGORIES SECTION*/}
            
            
            {/* NEWSLETTER*/}
            <section className="py-5">
              <div className="container p-0">
                <div className="row">
                  {/* <div className="col-lg-6 mb-3 mb-lg-0">
                    <h5 className="text-uppercase">Let's be friends!</h5>
                    <p className="text-small text-muted mb-0">Nisi nisi tempor consequat laboris nisi.</p>
                  </div> */}
                  {/* <div className="col-lg-6">
                    <form action="#">
                      <div className="input-group flex-column flex-sm-row mb-3">
                        <input className="form-control form-control-lg py-3" type="email" placeholder="Enter your email address" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                          <button className="btn btn-dark btn-block" id="button-addon2" type="submit">Subscribe</button>
                        </div>
                      </div>
                    </form>
                  </div> */}
                </div>
              </div>
            </section>
          </div>

          {/* JavaScript files*/}
          {/* FontAwesome CSS - loading as last, so it doesn't block rendering*/}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous" />
        </div>
      </div>
        );
    }
}

export default Header;