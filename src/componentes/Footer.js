import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  Actualizar = (fijado) => {this.setState({fijar :fijado})};
  componentWillReceiveProps(nextProps){
    let repetir
    if (this.props.fijado == nextProps.fijado) {
      repetir = false;
    }
    
    else{
      if(nextProps.fijado){
        this.Actualizar("fixed-bottom");
        repetir = true;
      }else{
        this.Actualizar("");
        repetir = true;
      }
    }
    
  }


  render() {

    return (
      <footer className=' position-absolute bottom-0 container-fluid d-flex bg-primary p-1 px-2 text-white fs-5 fw-semibold justify-content-center justify-content-md-between'>
                 <span className='d-none d-md-inline '>Comparte la música</span>
                 <span>@ Derechos Reservados</span> 
      </footer>
    )
  }
}

