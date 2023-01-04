import React, { Component } from 'react'

export class Registro extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        mail:"",
        contrasenia:"",
        contrasenia2:"",
        edad:-1,
        genero:"",
        condiciones:false
      }
    }

    handleChange = ({target}) => {
      const {name, value} = target;
      this.setState({[name]: value})
    }

    handleSubmit = e => {
      e.preventDefault();
      let errores = ""
      const validMail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
      const validContrasenia = new RegExp("[A-Za-z0-9]{8,40}")

      const mail=this.state.mail
      const contrasenia=this.state.contrasenia
      const contrasenia2= this.state.contrasenia2
      const genero = this.state.genero
      const edad= this.state.edad
      const condiciones = this.state.condiciones
      console.log(e.target.condiciones.value)
      if(!validMail.test(mail)){
        errores += "El mail no es valido \n"
        
      }
      if(!validContrasenia.test(contrasenia)){
        errores += "La contraseña no es valida \n"
      }else if(contrasenia !== contrasenia2){
        errores += "Las contraseñas deben coincidir \n"
      }
      if(edad == -1){
        errores += "Ingrese su edad \n"
      }
      if(!this.state.condiciones){
        errores += "Para continuar acepte los terminos y condiciones"
      }
      
      if(errores.length===0){
        alert("Su registro ha sido exitoso")
        this.props.PagActual("inicio")
      }else {alert(errores)}
    }

    render() {
    return (
        <form className='p-3 ' onSubmit={this.handleSubmit}>
        <legend>Inicio de Sesion</legend>
        <div class="mb-3 ">
          <label for="InputEmail1" class="form-label">Correo Electronico</label>
        <div class="input-group">
          <input onChange={this.handleChange} type="email" class="form-control" placeholder="Correo Electronico" name="mail" id="InputEmail1" aria-describedby="emailHelp"/>
          <span class="input-group-text" id="basic-addon1">@</span>
          </div>
          </div>
        <div class="mb-3">
          <label for="Password1" class="form-label">Contraseña</label>
          <div class="input-group">
          <input onChange={this.handleChange} name="contrasenia" type="password" placeholder="Contraseña" class="form-control" id="Password1"/>
          <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg></span>
          </div>
          </div>
          <div class="mb-3">
          <label for="Password2" class="form-label">Repetir contraseña</label>
          <div class="input-group">
          <input onChange={this.handleChange} name="contrasenia2" type="password" placeholder="Repetir contraseña" class="form-control" id="Password2"/>
          <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg></span>
          </div>
          </div>
          <div class="mb-3 ">
          <label for="generoMusical" class="form-label">Genero favoriro</label>
        <div class="input-group">
          <input onChange={this.handleChange} name="genero" type="text" class="form-control" placeholder="Genero" id="generoMusical"/>
          <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note" viewBox="0 0 16 16">
  <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M9 3v10H8V3h1z"/>
  <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"/>
</svg></span>
          </div>
          </div>
          
          <div className=' mb-3'>
          <label className='form-label'>Edad</label>
          <div name="edad" class="form-check">
            <input onChange={(e)=>this.setState({edad:e.target.value})} class="form-check-input" type="radio" value={0} name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
                Menor de 20
            </label>
            </div>
            <div class="form-check">
            <input onChange={(e)=>this.setState({edad:e.target.value})} class="form-check-input" type="radio" value={1} name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2">
                Entre 20 y 40
            </label>
            </div>
            <div class="form-check">
            <input onChange={(e)=>this.setState({edad:e.target.value})} class="form-check-input" type="radio" value={2} name="flexRadioDefault" id="flexRadioDefault3" />
            <label class="form-check-label" for="flexRadioDefault2">
                Mayor de 40
            </label>
            </div>
          </div>
          
          <div class="form-check mb-3">
            <input onChange={(e)=>this.setState({condiciones:e.target.checked})} name="condiciones" class="form-check-input" type="checkbox" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                Acepto los terminos y condiciones
            </label>
            <div class="form-text"><a type='button'>terminos y condiciones</a></div>
          </div>
        <button type="submit" class="btn btn-primary" >Registrarse</button>
        
      </form>
    )
  }
}

export default Registro