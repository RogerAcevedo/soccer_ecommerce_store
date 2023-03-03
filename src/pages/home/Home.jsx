import {React, useState} from 'react'


import { Button, Accordion, Carousel } from 'react-bootstrap';


import Logo from '../../assets/logo.png'
import cleats5 from '../../assets/cleats5.png'
import cleats6 from '../../assets/cleats6.png'
import cleats7 from '../../assets/cleats7.png'
import cleats8 from '../../assets/cleats5.png'
import cleats9 from '../../assets/cleats5.png'


export const Home = () => {

  return (
    <div className='home'>

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
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cleats7}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}
