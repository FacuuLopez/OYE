import React, { Component, ChangeEvent } from 'react'
import ListaCanciones from './ListaCanciones';
import { TypeCancionesContext } from '../context/Canciones.context';
import { TypeCancion } from '../types/types';

interface CancionesProps {
  value: TypeCancionesContext
}
interface CancionesState {
  canciones: TypeCancion[],
  busqueda:string
}

export default class Canciones extends Component<CancionesProps,CancionesState> {
  

    constructor(props: CancionesProps){
        super(props);
        this.state={
          canciones : this.props.value.canciones,
          busqueda:""
        };  
    }

    handleChangeBuscarCanciones = (e:ChangeEvent<HTMLInputElement>) =>  {
      const {canciones} = this.state;
      const {target} = e;
      const {value} = target;
      this.setState({busqueda: value})
      this.setState({canciones:canciones.filter(cancion =>{
        if(value.length===0){
          console.log("busqueda")
          return cancion
        }else if(cancion.nombre.toLowerCase().includes(value.toLowerCase())){
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
        <input className="form-control" name="busqueda" type="search" placeholder="Canciones" aria-label="Search"onChange={(e)=> this.handleChangeBuscarCanciones}/>
        </div>
        <ListaCanciones canciones={this.state.canciones}/>
        
      </main>
    );
  }
}

