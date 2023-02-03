import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

function Cart() {

  const cartItems = useSelector(state => state.cart)

  const totalAmount = cartItems.reduce((p,c) => { 

    return p + c.price


  },0)

  return (
    <div>
       <div className="cart-container">
      <div className="cart-items">

       { 

       cartItems.map((cartItem)=> 
       <CartItem key={cartItem.id} cartItem={cartItem}/> )
       }
      </div>
      <div className="bill-section">
        <h1>Total Items : {cartItems.length} </h1>
        <h1>Total Amount : {totalAmount.toFixed(2)}</h1>
        <button className="pay-btn">Pay Now</button>
      </div>
    </div>
    </div>
  )
}

export default Cart
