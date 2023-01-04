import Nav_menu from "./Nav_menu"; 
import Hero from "./Hero";
import Top3 from "./Top3";
import Footer from "./Footer";
import Canciones from "./Canciones";
import InicioSesion from "./InicioSesion";
import Registro  from "./Registro";

import React, { Component } from 'react'

export default class Contenedor extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        seccion: 'inicio',
        fijado: false
      }
      
    }
 PagActual = (e) => {
        if(typeof e == "string" ) this.setState({seccion:e});
        else this.setState({seccion:e.target.name});
        if(e.target.dataset.fijado){
          this.setState({fijado:true});
        }else if(e.target.dataset.fijado==undefined) {
          this.setState({fijado:false});
        }
      }
 CambiarPag = () => {
        switch(this.state.seccion){
            case('inicio'):
            return <><Hero PagActual={this.PagActual}/> <Top3 /></>;
            case('canciones'):
            return <Canciones />;
            case('inicioSesion'):
            return <InicioSesion PagActual={this.PagActual}/>;
            case('registro'):
            return <Registro PagActual={this.PagActual}/>;
        }
    }
  render() {
    
    return (
        
        <div className="container-fluid p-0">
            <header>
                <Nav_menu seccion={this.state.seccion} PagActual={this.PagActual}/>
            </header>
            <div className="container bg-light p-0">
                {
                  this.CambiarPag() 
                }                  
                
            </div>
            <Footer fijado={this.state.fijado}/>
        </div>
    );
  }

}