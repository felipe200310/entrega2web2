import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarMain = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow">
            <div className="container-fluid">
                <NavLink className="navbar-brand fw-bold" to="/">PeliWeb Admin</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><NavLink className="nav-link" to="/generos">Géneros</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/directores">Directores</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/productoras">Productoras</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/tipos">Tipos</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/medias">Media</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavbarMain;
