import React, { Component } from 'react'
import canciones from '../canciones/canciones.json'

export default class Top3 extends Component {
    
    constructor(props){
        super(props);
        this.state={canciones : canciones.canciones.sort((b,a)=>a.reproducciones-b.reproducciones).map(cancion => cancion).slice(0,3)
        };
    }
   
  render() {
    
    return (
        <section>
        <table className="table p-5 align-middle ">
          <thead className="px-2">
            <tr>
              <th colSpan="2">
                <h2 className="text-center">TOP 3</h2>
              </th>
            </tr>
            <tr>
              <th scope="col">
                <span className='fas fa-address-book'></span>Nombre
              </th>
              <th scope="col">
                Cancion
              </th>
            </tr>
          </thead>
          <tbody className="t-2">
          {this.state.canciones.map(cancion =>  
           <tr key={cancion.nombre}>
              <td className='text-primary fw-bold fs-5 text-capitalize' colSpan="1">
               {cancion.nombre}
              </td>  
              <td colSpan="1">
                <audio controls>
                  <source src={"../canciones/"+cancion.ruta} type="audio/mp3"/>
                </audio>
              </td>
            </tr>)}
          </tbody>
        </table>
      </section>
    );
  }
}
