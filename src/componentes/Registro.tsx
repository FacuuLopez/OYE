import React, { Component, ChangeEvent,FormEvent } from 'react'

interface registroState{
  [key:string]:string|boolean|number,
}

export class Registro extends Component<{},registroState> {
    constructor(props: {}) {
      super(props)
    
      this.state = {
        'mail':"",
        'contrasenia':"",
        'contrasenia2':"",
        'edad':-1,
        'generoMusical':"",
        'condiciones':false
      }
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      this.state[name] && typeof value === typeof this.state[name] &&  this.setState({[name]: value}); 
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>)  => {
      e.preventDefault();
      let errores = ""
      const validMail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
      const validContrasenia = new RegExp("[A-Za-z0-9]{8,40}")

      const mail=this.state.mail as string
      const contrasenia=this.state.contrasenia as string
      const contrasenia2= this.state.contrasenia2 as string
      const generoMusical = this.state.generoMusical as string
      const edad= this.state.edad as number
      const condiciones = this.state.condiciones as boolean
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
        //this.props.PagActual("inicio")
      }else {alert(errores)}
    }

    setEdad(e: ChangeEvent<HTMLInputElement>){
      typeof e.target.value === 'number' && this.setState({edad:e.target.value})
    }

    render() {
    return (
        <form className='p-3 ' onSubmit={e =>this.handleSubmit(e)}>
        <legend>Registro</legend>
        <div className="mb-3 ">
          <label htmlFor="InputEmail1" className="form-label">Correo Electronico</label>
        <div className="input-group">
          <input onChange={e => this.handleChange(e)} type="email" className="form-control" placeholder="Correo Electronico" name="mail" id="InputEmail1" aria-describedby="emailHelp"/>
          <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          </div>
        <div className="mb-3">
          <label htmlFor="Password1" className="form-label">Contraseña</label>
          <div className="input-group">
          <input onChange={e => this.handleChange(e)} name="contrasenia" type="password" placeholder="Contraseña" className="form-control" id="Password1"/>
          <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg></span>
          </div>
          </div>
          <div className="mb-3">
          <label htmlFor="Password2" className="form-label">Repetir contraseña</label>
          <div className="input-group">
          <input onChange={e => this.handleChange(e)} name="contrasenia2" type="password" placeholder="Repetir contraseña" className="form-control" id="Password2"/>
          <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg></span>
          </div>
          </div>
          <div className="mb-3 ">
          <label htmlFor="generoMusical" className="form-label">Genero favoriro</label>
        <div className="input-group">
          <input onChange={e => this.handleChange(e)} name="genero" type="text" className="form-control" placeholder="Genero" id="generoMusical"/>
          <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-music-note" viewBox="0 0 16 16">
  <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M9 3v10H8V3h1z"/>
  <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"/>
</svg></span>
          </div>
          </div>
          
          <div className=' mb-3'>
          <label className='form-label'>Edad</label>
          <div className="form-check">
            <input onChange={this.setEdad} className="form-check-input" type="radio" value={0} name="flexRadioDefault" id="flexRadioDefault1"/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Menor de 20
            </label>
            </div>
            <div className="form-check">
            <input onChange={this.setEdad} className="form-check-input" type="radio" value={1} name="flexRadioDefault" id="flexRadioDefault2" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                Entre 20 y 40
            </label>
            </div>
            <div className="form-check">
            <input onChange={this.setEdad} className="form-check-input" type="radio" value={2} name="flexRadioDefault" id="flexRadioDefault3" />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                Mayor de 40
            </label>
            </div>
          </div>
          
          <div className="form-check mb-3">
            <input onChange={(e)=>this.setState({condiciones:e.target.checked})} name="condiciones" className="form-check-input" type="checkbox" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Acepto los terminos y condiciones
            </label>
            <div className="form-text"><a type='button'>terminos y condiciones</a></div>
          </div>
        <button type="submit" className="btn btn-primary" >Registrarse</button>
        
      </form>
    )
  }
}

export default Registro;