import React from 'react'
import {Link} from "react-router-dom"
import { ShoppingCart, House  } from 'phosphor-react'

// // IMPORT CSS
// import "../styles/Navbar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavigationBar = () => {
  return (
    <div className='navbar'>

        <div id='home'>
          <Link to="/"> < House size={40} /> </Link>
        </div>



        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">OWN YOUR FOOTBALL!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">FOOTWEAR</Nav.Link>
            <Nav.Link href="#link">APPAREL</Nav.Link>

            <NavDropdown title="BRANDS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">NIKE</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">PUMA</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">ADIDAS</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/shop">
                ALL BRANDS
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    <div className='links' >    
          <Link to="/shop"> Shop </Link>
          <Link to="/cart">  <ShoppingCart size={40}/> </Link>
        </div>

        


    </div>
  )
}

export default NavigationBar;