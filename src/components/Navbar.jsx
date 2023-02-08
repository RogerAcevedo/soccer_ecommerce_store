import React from 'react'
import {Link} from "react-router-dom"
import { ShoppingCart, House  } from 'phosphor-react'

// IMPORT CSS
import "../styles/Navbar.css"

export const Navbar = () => {
  return (
    <div className='navbar'>

        <div id='home'>
          <Link to="/home" size={32}> < House /> </Link>
        </div>

        <div className='links'>    
          <Link to="/shop"> Shop </Link>
          <Link to="/cart">  <ShoppingCart size={32}/> </Link>
        </div>


    </div>
  )
}
