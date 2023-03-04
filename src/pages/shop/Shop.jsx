import React from 'react'

// IMPORT JS FILES
import { PRODUCTS } from "../../Product";

// IMPORT PAGES
import { Product } from "./Product"

// IMPORT CSS
import "./Shop.css";

// ! BOOTSTRAP IMPORTS
// top navbar
import { Button, Accordion, Carousel, Card, Placeholder } from 'react-bootstrap';

import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'

export const Shop = () => {
  return (
    <div>

      <div className='shop'>

        <div className='shopTittle'>
          <h1><b>NEW MUST HAVE CLEATS FOR YOUR SEASON</b></h1>
        </div>
      
        <div className='products'>
        {/* <Card style={{ width: 'auto' }} bg="light" > */}
          { PRODUCTS.map((product) => (
           
            <Product data= {product} />
            
          ))}
        </div>

      </div>

    </div>
  )
}
