import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// IMPORT COMPONENTS
import { PRODUCTS } from '../../Product'
import { ShopContext } from '../../context/Shop-Context'
import { CartItem } from './Cart-Item'

// IMPORT CSS
import "../../styles/Cart.css"

export const Cart = () => {

  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  // NAVIGATE HOOK
  const navigate = useNavigate()

  return (
    <div className='cart'>

      <div>
        <h1>Your Cart</h1>
      </div>
      
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data = {product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
      <div className='checkout'>
        <p>Subtotal: ${totalAmount} </p>

        <button onClick={() => navigate("/shop")}>Continue Shopping</button>
        
        <button>Checkout</button>

      </div>
      ) : ( <h1>Your Cart Is Empty</h1> )}

    </div>
  )
}
