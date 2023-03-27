import React from 'react';
import Hero from "../componentes/Hero";
import Top3 from "../componentes/Top3";
import { CancionesContext } from "../context/Canciones.context";
import { useNavigate } from 'react-router-dom';




const Home = () => {
  const navigate = useNavigate();
  return(<CancionesContext.Consumer>
        {value => <> <Hero navegar={navigate}/> <Top3 value={value}/> </> }   
    </CancionesContext.Consumer>)
} 

export default Home;