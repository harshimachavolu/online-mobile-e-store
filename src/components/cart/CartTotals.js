import React from 'react' 
import {Link} from 'react-router-dom'
export default function CartTotals({value}){
    const{cartSubTotal,cartTotal,cartTax,clearCart}=value;
return (
<div>
    <div className="container">
<div className="row">
<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
<Link to="/">
    <button className="btn btn-outline-danger mb-3 px-5" type='button'onClick={()=>clearCart()}>clear cart</button>
</Link>
<h5><span >Subtotal:</span> <strong>$ {cartSubTotal}</strong></h5>
<h5><span>Tax:</span> <strong>$ {cartTax}</strong></h5>
<h5><span >Total:</span> <strong>$ {cartTotal}</strong></h5>
</div>
</div>
    </div>
</div>)
}