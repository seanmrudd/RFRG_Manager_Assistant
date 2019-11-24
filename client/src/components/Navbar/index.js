import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item title">
                        RFRG Manager Assistant
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;