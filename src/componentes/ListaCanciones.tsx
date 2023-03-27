import React, { Component } from 'react'
import Cancion from './Cancion';
import {TypeCancion } from '../types/types';

interface ListaCancionesProps {
  canciones: TypeCancion[],
}

export default class ListaCanciones extends Component<ListaCancionesProps> {
    constructor(props:ListaCancionesProps){
        super(props);
    }
  render() {
    const lista=[];
      for(let i=0; i < this.props.canciones.length; i++){
        lista.push(i);
      }
    return ( 
      <div className="container py-2 px-2">
        <ul className='row'>
          {lista.map(index => <Cancion cancion={this.props.canciones[index]} />)}
        </ul>
      </div>
      );

  }
}