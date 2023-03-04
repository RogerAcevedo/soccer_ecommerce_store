import { React, useState } from 'react'

// ! IMPORT CSS
import "../../styles/Home.css"

// ! BOOTSTRAP IMPORTS
// top navbar
import { Button, Accordion, Carousel, Card, Placeholder } from 'react-bootstrap';


// nav under carousel
import Nav from 'react-bootstrap/Nav';

// ! IMPORT PICTURES
import cleats5 from '../../assets/cleats5.png'
import cleats6 from '../../assets/cleats6.png'
import cleats7 from '../../assets/cleats7.png'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import jersey1 from '../../assets/jersey1.png'
import jersey2 from '../../assets/jersey2.png'
import jersey3 from '../../assets/jersey3.png'




export const Home = () => {

  return (
    <div className='home'>

      

      {/* TOP CAROUSEL */}
      <section>
        <Carousel slide={true}>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cleats6}
              alt="First slide"

            />
            <Carousel.Caption>
              <h3>Best Soccer Cleats Right Now</h3>
              <p>Adidas Predators. Best in the Businesses</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cleats5}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Adidas Netherlands Signature</h3>
              <p>The "Orange Machine" Signature Cleats</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={cleats7}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Adidas Messi "World Gold" Signature Cleats</h3>
              <p> Messi World Cup Champion 2022</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </section>
      {/* TOP CAROUSEL END */}


      {/* PLACE HOLDERS */}
      <section>
      <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem' }} bg="light" >
          <Card.Title>Iconic Style, On Off the Pitch</Card.Title>
          <Card.Img variant="top" src={card1} />
          <Card.Body>
            <Card.Text>
              New Adidas Collection
            </Card.Text>
            <Button variant="warning"><a href="/shop">Shop Adidas</a></Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Title>Save Up to 65% on Sale Fan Jerseys</Card.Title>
          <Card.Img variant="top" src={card2} />
          <Card.Body>
            <Card.Text>
              Goal Club Member Save Up To 10% More
            </Card.Text>
            <Button variant="warning">SHOP SALE FAN JERSEYS</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem'}}>
          <Card.Title>Real Knows Real</Card.Title>
          <Card.Img variant="top" src={card3} />
          <Card.Body>
            <Card.Text>
              New 2023 La Liga Jerseys
            </Card.Text>
            <Button variant="warning">SHOP LA LIGA</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Title>Support Your team</Card.Title>
          <Card.Img variant="top"  src={card4} style={{ height: '18rem'}} />
          <Card.Body>
            <Card.Text>
              Jerseys, Scarves, Hats and More For The Whole Family
            </Card.Text>
            <Button variant="warning"  >SHOP SALE FAN JERSEYS</Button>
          </Card.Body>
        </Card>
        </div>
    </section>


      {/* MIDDLE NAVBAR */}
      <section>
        <Nav className="justify-content-between" activeKey="/home" justify variant="tabs">
          <Nav.Item>
            <Nav.Link href="/home" eventKey="link-0">SHOP ADIDAS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">ALL ADIDAS SOCCER CLEATS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">ARTIFICIAL TURF SHOES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">INDOOR SOCCER SHOES</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */}
        </Nav>
      </section>
      {/* MIDDLE NAVBAR END  */}


{/* 
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
          </Card.Body>
        </Card> */}
      {/* </div> */}
      {/* PLACE HOLDERS ENDS*/}

    

      {/* ENDING DIV */}
    </div>
  )
}

