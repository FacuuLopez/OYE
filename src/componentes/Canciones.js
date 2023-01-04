import React, { Component } from 'react'
import canciones from '../canciones/canciones.json'
import ListaCanciones from './ListaCanciones';

export default class Canciones extends Component {
    constructor(props){
        super(props);
        this.state={
          canciones : canciones.canciones.map(cancion => cancion),
          busqueda:""
        };  
    }
    handleChange = ({target}) => {
      console.log(target.value)
      const {name, value} = target;
      this.setState({[name]: value})
      this.setState({canciones:canciones.canciones.filter(cancion =>{
        if(target.value===0){
          console.log("busqueda")
          return cancion
        }else if(cancion.nombre.toLowerCase().includes(target.value.toLowerCase())){
          return cancion
        }

        
      }
        ).map(cancion => cancion)})
    }
  render() {
    return (
      <main className="px-3">
        <h2 className="px-2">Canciones</h2>
        <div className="px-2">
        <input className="form-control" namme="busqueda" type="search" placeholder="Canciones" aria-label="Search"onChange={this.handleChange}/>
        </div>
        <ListaCanciones canciones={this.state.canciones}/>
        
      </main>
    );
  }
}

