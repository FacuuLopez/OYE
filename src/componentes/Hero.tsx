import HeroCarousel from "./HeroCarousel"
import React, { Component } from 'react'

interface HeroProps{
  navegar: (path: string, {}?) => void,
}

export default class Hero extends Component<HeroProps>{



  constructor(props: HeroProps) {
    super(props)
  }

    render(){
      return (
        <section className="hero d-grid p-5  my-2 bg-secondary bg-opacity-25">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <h2>Canciones gratis para la comunidad!</h2>
                    <p>Con este sitio podras escuchar audios de manera libre...</p>
                    <button className="btn btn-primary" role="button" onClick={() => { this.props.navegar("../canciones", { replace: true }) }}>Ver Canciones</button>
                  </div>
                  <div className="d-none d-sm-inline-block col-sm-6">
                    <HeroCarousel />
                  </div>
                </div>
              </section>
      )
   }
}