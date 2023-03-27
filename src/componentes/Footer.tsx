import React, { Component } from 'react'

export default class Footer extends Component {

  render() {

    return (
      <footer className=' position-absolute bottom-0 container-fluid d-flex bg-primary p-1 px-2 text-white fs-5 fw-semibold justify-content-center justify-content-md-between'>
                 <span className='d-none d-md-inline '>Comparte la música</span>
                 <span>@ Derechos Reservados</span> 
      </footer>
    )
  }
}

