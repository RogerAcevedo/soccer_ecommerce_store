import React, {useContext} from 'react'

// IMPORT COMPONENTS
import { ShopContext } from '../../context/Shop-Context';

export const CartItem = (props) => {

    // PROPS
    const {id, productImage, productName, price} = props.data;

    // USE CONTEXT from "Shop-Context" - all needed functions for our cart
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className='cartItem'>
        <img src={productImage} />

        <div className='description'>

            <p> <b> {productName}</b> </p>
            <p> $ {price} </p>
                
        </div>

        <div className='countHandler'>

            <button onClick={() => removeFromCart(id)}> - </button>
            {/* "onChange" takes in a string - need "Number" so it takes in a number */}
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={() => addToCart(id)}> +</button>
        </div>

    </div>
  )
}
