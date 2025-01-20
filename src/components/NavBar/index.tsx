import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles.sass';

interface Props {}

const NavBar: React.FC<Props> = ({}) => {
    return (
        <nav className="navbar">
            <div className="navbar-title">
                <div className="navbar-subtitle">
                    <Link to="/" className="title-main">
                        Recipe
                    </Link>{' '}
                    <Link to="/" className="title-submain">
                        App
                    </Link>
                </div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-submenu">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'links-active' : 'links')}>
                        Home
                    </NavLink>
                    <NavLink to="/vegetarianos" className={({ isActive }) => (isActive ? 'links-active' : 'links')}>
                        Vegetarianos
                    </NavLink>
                    <NavLink to="/platos-principales" className={({ isActive }) => (isActive ? 'links-active' : 'links')}>
                        Platos Principales
                    </NavLink>
                    <NavLink to="/tortas" className={({ isActive }) => (isActive ? 'links-active' : 'links')}>
                        Tortas
                    </NavLink>
                    <NavLink to="/comida-rapida" className={({ isActive }) => (isActive ? 'links-active' : 'links')}>
                        Comida Rápida
                    </NavLink>
                    <NavLink to="/menu-infantil" className={({ isActive }) => (isActive ? 'links-active' : 'links')}>
                        Menú Niños
                    </NavLink>
                    <NavLink to="/sopas" className={({ isActive }) => (isActive ? 'links-active' : 'links')}>
                        Sopas
                    </NavLink>
                </div>
            </div>
            <div className="navbar-home">
                <div className="content-home">
                    <Link to="/" className="link-home">
                        <img src="/assets/icons/ic_home.png" alt="home" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
