import React,{ Component } from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../Context";
import styled from "styled-components";

export default class Product extends Component{
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        return(
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card">
                   <ProductConsumer>
                       {(value)=>(<div className="img-container p-5" onClick={()=> value.handleDetail(id)}>
                 <Link to="/details">
                     <img src={img} alt="product" className="card-img-top"/>
                 </Link>
                 <Button className="cart-btn" disabled={inCart?true:false} onClick={()=>{value.addToCart(id)}} >
                  {inCart?(<p className="text-capitalize mb-0" disabled>In cart</p>):(<i className="fas fa-cart-plus" />  ) } 
                  </Button>
                   </div>)}
                   
                   </ProductConsumer>
                   <div className="card-footer d-flex justify-content-between">
                       <p className="align-self-center mb-0">{title}</p>
                       <h5 className="text-blue font-italic mb-0">
                           <span className="mr-1">$</span>
                           {price}
                       </h5>

                   </div>
               </div>
            </div>
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
`;
