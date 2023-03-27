import React from 'react';
import CancionesComponent from '../componentes/Canciones';
import { TypeCancionesContext } from '../context/Canciones.context';
import { CancionesContext } from '../context/Canciones.context';

export const Canciones: React.FC = () => {
  return (
    <CancionesContext.Consumer>
      {(value: TypeCancionesContext) => (
        <CancionesComponent value={value} />
      )}
    </CancionesContext.Consumer>
  );
};
