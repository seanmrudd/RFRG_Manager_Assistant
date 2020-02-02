import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar">

                <a className="navbar-brand">Moe's Manager</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
                    aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent15">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
}

export default Navbar;