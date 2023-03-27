import React, { createContext, useState, useEffect,FC } from 'react';
import listaCanciones from "../canciones/canciones.json";
import { TypeCancion, TypeChildren } from '../types/types';

export type TypeCancionesContext = {
        canciones: TypeCancion[],       
    }

export type TypeValueCancionesContext = {
    canciones: TypeCancion[],
    setCanciones: (canciones:TypeCancion[] ) => void; 
}

export const CancionesContext = createContext<TypeCancionesContext>({
    canciones:  [],
});

export const CancionesProvider :FC<TypeChildren> = ({children}) => {
    const importarCanciones:TypeCancion[] = listaCanciones.canciones.map(cancion => cancion) as Array<TypeCancion>;
    const [canciones, setCanciones] = useState<TypeCancion[]>(importarCanciones);

    useEffect(() => {
        setCanciones(importarCanciones);
      }, []);

    const value: TypeValueCancionesContext = {
        canciones,
        setCanciones,
    }

    return(<CancionesContext.Provider value={value}>{children}</CancionesContext.Provider>)
}

