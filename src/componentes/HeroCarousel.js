import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import Portada from "../imagenes/portada.jpeg"


export default class HeroCarousel extends Component {
  render() {
    return (
      <Carousel controls={false} indicators={false} interval={2000}>
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
/*
export default class HeroCarousel extends Component {
  render() {
    return (
      <div className='carousel slide data-bs-ride="true"' controls={false} indicators={false} interval={2000}>
                      <div className='carousel-item active'>
                          <img src={Portada} className="d-block w-100" alt="Fondo Portada"/>
                      </div>
                      <div className='carousel-item'>
                        <img src={Portada} className="d-block w-100" alt="Fondo Portada" style={{ transform: 'rotate(180deg)', filter: 'hue-rotate(270deg)' }}/>
                    </div>
    </div>
    )
  }
}
*/