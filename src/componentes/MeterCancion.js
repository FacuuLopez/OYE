import React, { Component } from 'react'
import Cancion from './Cancion';


export default class MeterCancion extends Component {
    constructor(props){
        super(props);
    }
  render() {
   let lista=[]; 
   for(let e =0 ; e<3;e++){
    lista.push(this.props.i*3+e);
   }
    return (
        <div class="row my-2">
            {lista.map(index => <Cancion cancion={this.props.canciones[index]}/>)}
        </div>
    );
  }
}
