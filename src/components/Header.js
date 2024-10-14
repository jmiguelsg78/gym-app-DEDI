import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header (){
    return(
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/register">Registro</Link>
            <Link to="/courses">Cursos</Link>
            <Link to="/reservation">Reservas</Link>
        </nav>
    )

}
export default Header;