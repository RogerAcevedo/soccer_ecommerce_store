import React from 'react'
import { ShoppingCart, TiktokLogo, InstagramLogo, TwitterLogo, AddressBook, Envelope  } from 'phosphor-react'
import { Link } from 'react-router-dom'

import "../styles/Footer.css"

export const Footer = () => {
  return (
    <div className='footer'>

      <div className='social'>
        
        <a href="https://tiktok.com/" target="_blank"><TiktokLogo size={32} /> </a> 
        <a href="https://twitter.com/" target="_blank"><TwitterLogo size={32} /> </a> 
        <a href="https://instagram.com/" target="_blank"><InstagramLogo size={32} /> </a> 

        <div className='contact'>
          <Link to="/about">  <AddressBook /> </Link>
          <Link to='javascript:void(0)'
           onClick={() => window.location = 'mailto:rogeracevedocreate@gmail.com'}>
           < Envelope size={32}/>   
          </Link>
        </div>

      </div>


    </div>
  )
}
