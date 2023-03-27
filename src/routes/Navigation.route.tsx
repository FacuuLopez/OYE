import {Outlet} from 'react-router-dom';
import NavMenu from "../componentes/NavMenu";
import Footer from "../componentes/Footer";
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Navigation = () => {

    const navigate = useNavigate();

    return (
        
        <div className="container-fluid p-0">
            <header>
                <NavMenu navegar={navigate}/>
            </header>
            <Outlet/> 
            <Footer/>
        </div>
    );
}

export default Navigation;