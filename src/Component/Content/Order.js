import React, { Component } from 'react';
import axios from 'axios';
class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
          order:[],
          user:{}
        }
      }
      getDataOrder = () => {
        let name = this.state.user['name'];
        axios({
            method: 'GET',
            url: `https://data-json-server.herokuapp.com/api/orders?userName=${name}`,
            data: null
        }).then(res => {
            this.setState({ 
              loading:true,
              order: res.data,
            });
            console.log(this.state.order);
    
        }).catch(err => { });
        
    }
    componentDidMount(){
        
        if(localStorage.getItem('currenrUser')){
          const haha = JSON.parse(localStorage.getItem('currenrUser'));
        this.setState({
          user: haha
        }, ()=> this.getDataOrder())
        }
        
      }
      
    render() {
        return (
            <div>
                <React.Fragment>
            <div className="container">
        {/* HERO SECTION*/}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Cart</h1>
              </div>
              <div className="col-lg-6 text-lg-right">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Cart</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
          <div className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              {/* CART TABLE*/}
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead className="bg-light">
                    <tr>
                      <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Product</strong></th>
                      <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Price</strong></th>
                      <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Quantity</strong></th>
                      <th className="border-0" scope="col"> <strong className="text-small text-uppercase">Total</strong></th>
                      <th className="border-0" scope="col"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="pl-0 border-0" scope="row">
                        <div className="media align-items-center"><a className="reset-anchor d-block animsition-link" href="detail.html"><img src="img/product-detail-3.jpg" alt="..." width={70} /></a>
                          <div className="media-body ml-3"><strong className="h6"><a className="reset-anchor animsition-link" href="detail.html">Red digital smartwatch</a></strong></div>
                        </div>
                      </th>
                      <td className="align-middle border-0">
                        <p className="mb-0 small">$250</p>
                      </td>
                      <td className="align-middle border-0">
                        <div className="border d-flex align-items-center justify-content-between px-3"><span className="small text-uppercase text-gray headings-font-family">Quantity</span>
                          <div className="quantity">
                            <button className="dec-btn p-0"><i className="fas fa-caret-left" /></button>
                            <input className="form-control form-control-sm border-0 shadow-0 p-0" type="text" defaultValue={1} />
                            <button className="inc-btn p-0"><i className="fas fa-caret-right" /></button>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-0">
                        <p className="mb-0 small">$250</p>
                      </td>
                      <td className="align-middle border-0"><a className="reset-anchor" href="#"><i className="fas fa-trash-alt small text-muted" /></a></td>
                    </tr>
                    <tr>
                      <th className="pl-0 border-light" scope="row">
                        <div className="media align-items-center"><a className="reset-anchor d-block animsition-link" href="detail.html"><img src="img/product-detail-2.jpg" alt="..." width={70} /></a>
                          <div className="media-body ml-3"><strong className="h6"><a className="reset-anchor animsition-link" href="detail.html">Apple watch</a></strong></div>
                        </div>
                      </th>
                      <td className="align-middle border-light">
                        <p className="mb-0 small">$250</p>
                      </td>
                      <td className="align-middle border-light">
                        <div className="border d-flex align-items-center justify-content-between px-3"><span className="small text-uppercase text-gray headings-font-family">Quantity</span>
                          <div className="quantity">
                            <button className="dec-btn p-0"><i className="fas fa-caret-left" /></button>
                            <input className="form-control form-control-sm border-0 shadow-0 p-0" type="text" defaultValue={1} />
                            <button className="inc-btn p-0"><i className="fas fa-caret-right" /></button>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle border-light">
                        <p className="mb-0 small">$250</p>
                      </td>
                      <td className="align-middle border-light"><a className="reset-anchor" href="#"><i className="fas fa-trash-alt small text-muted" /></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* CART NAV*/}
              <div className="bg-light px-4 py-3">
                <div className="row align-items-center text-center">
                  <div className="col-md-6 mb-3 mb-md-0 text-md-left"><a className="btn btn-link p-0 text-dark btn-sm" href="shop.html"><i className="fas fa-long-arrow-alt-left mr-2"> </i>Continue shopping</a></div>
                  <div className="col-md-6 text-md-right"><a className="btn btn-outline-dark btn-sm" href="checkout.html">Procceed to checkout<i className="fas fa-long-arrow-alt-right ml-2" /></a></div>
                </div>
              </div>
            </div>
            {/* ORDER TOTAL*/}
            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">Cart total</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center justify-content-between"><strong className="text-uppercase small font-weight-bold">Subtotal</strong><span className="text-muted small">$250</span></li>
                    <li className="border-bottom my-2" />
                    <li className="d-flex align-items-center justify-content-between mb-4"><strong className="text-uppercase small font-weight-bold">Total</strong><span>$250</span></li>
                    <li>
                      <form action="#">
                        <div className="form-group mb-0">
                          <input className="form-control" type="text" placeholder="Enter your coupon" />
                          <button className="btn btn-dark btn-sm btn-block" type="submit"> <i className="fas fa-gift mr-2" />Apply coupon</button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
            </React.Fragment>
            </div>
        );
    }
}

export default Order;