import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {

  const cartItem = useSelector(state => state.cart)
  
  return (
    <nav>
     <h1 className="logo">My.Store</h1>
     <ul className="nav-links">
         <li className="category">Electronics</li>
         <li className="category">Jewelery</li>
         <li className="category">Men's Clothing</li>
         <li className="category">Women's Clothing</li>
         <li> <button className="cart"> Cart ({cartItem.length}) </button> </li>   
     </ul>
 </nav>
  )
}

export default Navbar