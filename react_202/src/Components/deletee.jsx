import React from 'react';
function Cart (){

return (

<div className="col-25">
    <div className="container">
      <h4>Cart <span className="price" style={{color:"black"}}><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
      <p><a href="#">Product 1</a> <span className="price">$15</span> <button className="btn.Login">Remove</button> </p>
      <p><a href="#">Product 2</a> <span className="price">$5</span></p>
      <p><a href="#">Product 3</a> <span className="price">$8</span></p>
      <p><a href="#">Product 4</a> <span className="price">$2</span></p>
      <hr/>
      <p>Total <span className="price" style={{color:"black"}}><b>$30</b></span></p>
    </div>
  </div>

);


}

export default Cart;