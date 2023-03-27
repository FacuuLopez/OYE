import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import Portada from '../imagenes/portada.jpeg'
import './HeroCarousel.css'


export default class HeroCarousel extends Component {
  render() {
    return (
      <Carousel className='my-carousel' controls={false} indicators={false} interval={4000}>
                      <Carousel.Item>
                          <img src={Portada} className="d-block w-100" alt="Fondo Portada"/>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img src={Portada} className="d-block w-100" alt="Fondo Portada" style={{ transform: 'rotate(180deg)', filter: 'hue-rotate(270deg)' }}/>
                    </Carousel.Item>
    </Carousel>
    )
  }
}