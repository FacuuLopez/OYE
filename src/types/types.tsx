import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface TypeCancion extends Object {
    nombre: string,
    icono: number,
    reproducciones: number,
    ruta: string,
  };
  export interface TypeCanciones extends Array<TypeCancion> {
    canciones: TypeCancion[] 
  };

  export interface TypeChildren{
    children: React.ReactNode
  }
