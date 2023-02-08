import React from 'react'

// IMPORT JS FILES
import { PRODUCTS } from "../../Product";

// IMPORT PAGES
import { Product } from "./Product"

// IMPORT CSS
import "./Shop.css";

export const Shop = () => {
  return (
    <div>

      <div className='shop'>

        <div className='shopTittle'>
          <h1>Rogerhxh Football Store</h1>
        </div>

        <div className='products'>
          { PRODUCTS.map((product) => (
            <Product data= {product} />
          ))}
        </div>

      </div>


    </div>
  )
}
