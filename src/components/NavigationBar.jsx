import React from 'react'
import { Link } from "react-router-dom"
import { ShoppingCart, House, Heart } from 'phosphor-react'

// IMPORT CSS
import "../styles/Navbar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// ! BOOTSTRAP IMPORTS
// top navbar
import {Form, Button } from 'react-bootstrap';

export const NavigationBar = () => {
  return (
    <div className='navbar'>

      <Navbar expand={'lg'} fixed="top"   >


        <div>
          <Link to="/"> < House size={40} color="black"/> </Link>
        </div>

        <Container>
          <Navbar.Brand href="/">FUTBOL.COM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">


              <Nav.Link href="#home">FOOTWEAR</Nav.Link>
              <Nav.Link href="#link">APPAREL</Nav.Link>
              <Nav.Link href="/shop">SHOP</Nav.Link>

              <Nav.Link href="/shop">TEAM</Nav.Link>
              <Nav.Link href="/shop">FAN</Nav.Link>
              <Nav.Link href="/shop">WOMEN</Nav.Link>

              <Nav.Link href="/shop">YOUTH</Nav.Link>
              <Nav.Link href="/shop">GOALKEEPER</Nav.Link>
              <Nav.Link href="/shop">SALE</Nav.Link>

              <NavDropdown title="BRANDS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">NIKE</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">PUMA</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">ADIDAS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  ALL BRANDS
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>

        {/* <div id='icon'>
          <Link to="/cart">  <Heart size={25} color="black" /> </Link>
        </div> */}

        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>

          <div>
          <Link to="/cart">  <ShoppingCart size={40} color="black" /> </Link>
        </div>
      </Navbar>






    </div>
  )
}

export default NavigationBar;