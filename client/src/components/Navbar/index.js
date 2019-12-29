import React from 'react';
import './style.css';
import logo from '../../assets/images/moes_logo.jpg';

function Navbar(props) {
    return (
        <div>
            <img src={logo} alt="Logo"></img>
        </div>
    );
}

export default Navbar;