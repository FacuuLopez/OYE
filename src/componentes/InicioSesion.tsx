import React, { Component, ChangeEvent,FormEvent } from 'react'

interface inicioSesionProps{
  mail: string,
  contrasenia: string
}

export class InicioSesion extends Component<{},inicioSesionProps> {
    constructor(props: {} | Readonly<{}>) {
      super(props)
    
      this.state = {
         mail:"",
         contrasenia:""
      }
    }
    handleChange = (e: FormEvent<HTMLInputElement> ) => {
      e.preventDefault();
      const {name, value} = e.currentTarget;
      name === 'mail' || name === 'contrasenia' && this.setState({[name]: value})
    }
    handleSubmit = (e: { preventDefault: () => void; }) => {
      let errores = ""
      const validMail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
      const validContrasenia = new RegExp("[A-Za-z0-9]{8,40}")

      const mail=this.state.mail
      const contrasenia=this.state.contrasenia

      if(!validMail.test(mail)){
        errores += "El mail no es valido \n"
      }
      if(!validContrasenia.test(contrasenia)){
        errores += "La contraseña no es valida \n"
      }

      if(errores.length===0){
        alert("Ingreso exitoso")
        //this.props.PagActual("inicio")
      }else {alert(errores)}
    
    }
    render() {
    return (
        <form className='p-3' onSubmit={this.handleSubmit}>
        <legend>Inicio de Sesion</legend>
        <div className="mb-3 ">
          <label htmlFor="InputEmail1" className="form-label">Correo Electronico</label>
        <div className="input-group">
          <input onChange={e => this.handleChange(e)} name="mail" type="email" className="form-control" placeholder="Correo Electronico" id="InputEmail1" aria-describedby="emailHelp"/>
          <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          </div>
        <div className="mb-3">
          <label htmlFor="InputPassword1" className="form-label">Contraseña</label>
          <div className="input-group">
          <input onChange={e => this.handleChange(e)} type="password" name="contrasenia" placeholder="Contraseña" className="form-control" id="InputPassword1"/>
          <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg></span>
          </div>
          </div>
        <button type="submit" className="btn btn-primary">Continuar</button>
        
      </form>
    )
  }
}

export default InicioSesion