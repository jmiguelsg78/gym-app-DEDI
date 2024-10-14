import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header (){
    return(
        <nav>
            <Link to="/gym-app-DEDI">Inicio</Link>
            <Link to="/gym-app-DEDI/register">Registro</Link>
            <Link to="/gym-app-DEDI/courses">Cursos</Link>
            <Link to="/gym-app-DEDI/reservation">Reservas</Link>
        </nav>
    )

}
export default Header;