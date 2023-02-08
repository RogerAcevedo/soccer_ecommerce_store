import React, { useContext } from 'react'

// IMPORT COMPONENTS 
import { ShopContext } from '../../context/Shop-Context'



export const Product = (props) => {

    const {id, productName, price, productImage} = props.data;

    // FUNCTION FROM "Shop-Context component"
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)

    // VARIABLE TO KEEP TRACK OF ITEMS IN CART
    const cartItemAmount = cartItems[id]

  return (
    <div className='product'>

        <img src={productImage} />

        <div className='description'>
            <p>
                <b> {productName}</b>
            </p>
            <p>
                ${price}
            </p>
        </div>

        <button className='addToCartBttn' onClick={() => addToCart(id)}> 
        Add to Cart { cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
    </div>
  )
}
