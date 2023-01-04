import React, { Component } from 'react'
import MeterCancion from './MeterCancion';
import Cancion from './Cancion';
export default class ListaCanciones extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let lista=[];
      for(let i=0; i < this.props.canciones.length; i++){
        lista.push(i);
      }
    return ( 
      <div class="container py-2 px-2">
        <ul className='row'>
          {lista.map(index => <Cancion cancion={this.props.canciones[index]}/>)}
        </ul>
      </div>
      );

  }
}