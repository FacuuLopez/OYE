import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home.route';
import Navigation from './routes/Navigation.route';
import  {Canciones}  from './routes/Canciones.route';
import { Registro } from './routes/Registro.route';
import { InicioSesion } from './routes/InicioSesion.route';

import './App.css';



function App() {
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='inicio' element={<Home />} />
        <Route path='canciones' element={<Canciones />} />
        <Route path='inicioSesion' element={<InicioSesion />} />
        <Route path='registro' element={<Registro/>} />
      </Route>
    </Routes>
  );
  }

export default App;
