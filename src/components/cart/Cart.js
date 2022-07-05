import React,{ Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../Context';
import Cartlist from './CartList';
import CartTotals from './CartTotals'
export default class cart extends Component{
    render() {
        return(
        <div>
            <ProductConsumer>
                {value=>{
                    const {cart} =value;
                    if(cart.length>0){
                        return(
                            <div>
                            <Title name="your" title="cart"/>
                             <CartColumns />
                             <Cartlist value={value}/>
                             <CartTotals value={value}/>
                             </div>

                        )
                    }
                  else{
                    return  <EmptyCart/>;
                  }  
                }}
            </ProductConsumer>
            
        
        </div>
        );
    }
}