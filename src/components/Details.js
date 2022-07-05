import React,{ Component } from 'react'
import { ProductConsumer } from '../Context'
import {Link} from 'react-router-dom'
import styled from "styled-components";
export default class Details extends Component{
    render() {
        return(
            <ProductConsumer>
                {(value)=>{
                 const {id,company,img,info,price,title,inCart}= value.detailProduct;   
                return(
                    <div className="comtainer py-5">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                               <h1>{title}</h1>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                      <img src={img} className="img-fluid" alt="product"/>

                            </div>
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2>model: {title}</h2>
                                 <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>made by: <span className="text-uppercase">{company}</span></h4>
                            <h4 className="text-blue"><strong> 
                                price:<span>$</span>{price}
                                </strong> </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product</p>
                            <p className="text-muted lead">{info}</p>
                            </div>
                            
                        </div>
                        <div className="container">
                            <div>
                            
                              <Button className="cart-btn" disabled={inCart? true : false} onClick={()=>{value.addToCart(id);}}>{inCart? "inCart":"Add to Cart"}</Button>
                              
                              <Link to="/"> <Button>continue shopping</Button></Link>
                              </div>
                              </div>

                    </div>
                )
                }

                }
            </ProductConsumer>
        );
    }
}

const Button = styled.button`
  color: rgb(0,0,0);
  border: 2px solid rgb(255,228,225);
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  list-style-type: none;
  text-decoration: none;
  
  
 
  
  
  

  &:hover {
    opacity: 0.9;
  }

`
;
