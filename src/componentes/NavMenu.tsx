import Logo from "../imagenes/logo.png"
import VentanaModal from "./VentanaModal"
import React, {Component} from 'react';
import { getCurrentPath } from "../utils/Navigate.utils";
import { NavigateFunction } from "react-router";

interface Nav_menuProps {
  navegar: NavigateFunction
}

interface Nav_menuState{
  seccion:string
}

export default class Nav_menu extends Component<Nav_menuProps,Nav_menuState> {

  constructor(props: Nav_menuProps) {
    super(props)

    this.state = {
      seccion:'',
    }
  }
  
  componentDidMount(): void {
    const url = getCurrentPath();
    const seccion = url.replace(/\//g, '');
    this.setState({seccion})
  }

  menu = () => { return(<nav className="navbar navbar-expand-lg navbar-white bg-white ">
    <a onClick={this.homeSeccion}  className="navbar-brand fs-3 text-primary fw-bold mx-2" href="#">OYE {<img src={Logo} alt="Logo titulo"/>}</a>
  <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>  
    <div className={`collapse navbar-collapse justify-content-between`} id="navbarSupportedContent">
      <div className="d-flex">
      </div>
      <div className="d-flex flex-row flex-md-column m-auto">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-lg-3">
          <li className="nav-item mx-3 fs-5">
            <button className={`nav-link btn border border-0 ${this.state.seccion === 'inicio' && 'active'}`} onClick={e =>{this.cambiarSeccion(e)} } key="inicio" data-seccion="inicio">Inicio</button>
          </li>
          <li className="nav-item mx-3 fs-5">
            <button className={`nav-link btn border border-0 ${this.state.seccion === 'canciones' && 'active'}`}  onClick={e =>{this.cambiarSeccion(e)} } key="canciones"  data-seccion="canciones">Canciones</button>
          </li>
          </ul>
        </div>
        <div className="d-flex flex-row flex-md-column mx-lg-2">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item mb-3 mb-lg-0 mx-2">
            <VentanaModal/>
            </li>
          <li className="nav-item mb-3 mb-lg-0 mx-2">
          <button className={`btn btn-primary ${this.state.seccion === 'inicioSesion' && 'active'}`}   onClick={e =>{this.cambiarSeccion(e)} }  data-fijado={true} key="inicioSesion"  data-seccion="inicioSesion">
              Inicio de Sesion
            </button>
            </li>
            <li className="nav-item mb-3 mb-lg-0 mx-2">
              <button className={`btn btn-primary ${this.state.seccion === 'inicio' && 'active'}`}   onClick={e =>{this.cambiarSeccion(e)} } key="registro"  data-seccion="registro">
                Registro
              </button>
            </li>
        </ul>
        </div>
    </div>
  </nav>);
  }

  homeSeccion = () => {
    this.ActivarBoton('inicio');
  }
  cambiarSeccion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const seccion = e.currentTarget.getAttribute('data-seccion');
    const { navegar } = this.props;
    if (seccion) {
      navegar(seccion);
      this.ActivarBoton(seccion);
    }   
  }

  ActivarBoton = (seccion: string) => {
         this.setState({seccion});
    }
  render() {
    return(
      <>
        {this.menu()}
      </>
        
      
  );
  }
}