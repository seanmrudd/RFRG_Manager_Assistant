import React from 'react';
import './style.css';
import logo from '../../assets/images/moes_logo.jpg';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar">
                <div className="navbarLinks">
                    <Link to="/menu">
                        <img src={logo} alt="logo" />
                    </Link>
                    <Link to="/login"><span className="navbarLogOut">Log Out</span></Link>
                </div>
                <div className="navbarHeader">
                    <h1>RFRG Manager Assistant</h1>
                </div>
            </nav>
        </div >
    );
}

export default Navbar;