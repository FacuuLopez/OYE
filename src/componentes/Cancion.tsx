import React, { Component } from 'react'
import { TypeCancion } from '../types/types';

interface CancionProps {
  cancion: TypeCancion,
}

export default class Cancion extends Component<CancionProps> {
    constructor(props: CancionProps){
        super(props);
    }
    
  render() {
    return (
        <li key={this.props.cancion.nombre} className="col12 col-md-6 col-lg-4 d-flex flex-column my-2">
        <div className="d-flex w-100 justify-content-center border border-2">
          <img className="w-25" src={"../imagenes/icon_"+this.props.cancion.icono+".svg"} alt="" />
        </div>
        <div className="d-flex flex-column bg-white p-3 border border-2 border-top-2">
          <div className="text-center fw-bold p-2">
            {this.props.cancion.nombre}
            </div>
          <div className="p-2">
            <audio controls className="w-100">
              <source src={"../canciones/"+this.props.cancion.ruta} type="audio/mp3"/>
            </audio>
          </div>
        </div>
      </li>
      );

  }
}
