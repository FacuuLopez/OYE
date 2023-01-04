import Logo from "../imagenes/logo.png"
import VentanaModal from "./VentanaModal"
import React, { Component, createRef } from 'react'
import {useEffect} from 'react';


export default class Nav_menu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       seccion: this.props.seccion
    }
    const {PagActual} = this.props
    this.inicio = createRef();
    this.canciones = createRef();
    this.inicioSecion = createRef();
    this.registro = createRef();
    this.menu = (<nav className="navbar navbar-expand-lg navbar-white bg-white " name="menu" >
    <a onClick={()=>{this.ActivarBoton('inicio'); PagActual("inicio")} } className="navbar-brand fs-3 text-primary fw-bold mx-2" href="#">OYE {<img src={Logo} alt="Logo titulo"/>}</a>
  <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>  
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <div className="d-flex">

      </div>
      <div className="d-flex flex-row flex-md-column m-auto">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-lg-3">
          <li className="nav-item mx-3 fs-5">
            <button className="nav-link btn border border-0 active" onClick={(e)=>{this.ActivarBoton('inicio'); PagActual(e)} } ref={this.inicio} key="inicio" name="inicio">Inicio</button>
          </li>
          <li className="nav-item mx-3 fs-5">
            <button className="nav-link btn border border-0" onClick={(e)=>{this.ActivarBoton('canciones'); PagActual(e)} }ref={this.canciones} key="canciones"  name="canciones">Canciones</button>
          </li>
          </ul>
        </div>
        <div className="d-flex flex-row flex-md-column mx-lg-2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item mb-3 mb-lg-0 mx-2">
            <VentanaModal/>
            </li>
          <li className="nav-item mb-3 mb-lg-0 mx-2">
          <button className="btn btn-primary"  onClick={(e)=>{this.ActivarBoton('inicioSecion'); PagActual(e)} }ref={this.inicioSecion} data-fijado={true} key="inicioSesion"  name="inicioSesion">
              Inicio de Sesion
            </button>
            </li>
            <li className="nav-item mb-3 mb-lg-0 mx-2">
                <button className="btn btn-primary"  onClick={(e)=>{this.ActivarBoton('registro'); PagActual(e)} }ref={this.registro} key="registro"  name="registro">
                  Registro
            </button>
          </li>
      </ul>
      </div>
  </div>
</nav>);
  }

  ActivarBoton = (seccion) => {
    
    this.inicio.current.className = 'nav-link btn border border-0';
    this.canciones.current.className = 'nav-link btn border border-0';
    this.inicioSecion.current.className = 'btn btn-primary';
    this.registro.current.className = 'btn btn-primary';
    console.log(this.inicio.current.className ,
    this.canciones.current.className,
    this.inicioSecion.current.className,
    this.registro.current.className );
      switch(seccion){
        case 'inicio':
          this.inicio.current.className += ' active';
          break;
        case 'canciones':
          this.canciones.current.className += ' active';
          break;
        case 'inicioSecion':
          this.inicioSecion.current.className += ' active'; 
          break;
        case 'registro':
          this.registro.current.className += ' active'; 
          break;
      }  
    }
  render() {
    return(
      this.menu
  );
  }
}