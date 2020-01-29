import React from "react";
import "./style.css";
import { link, Link } from 'react-router-dom';

export default function MenuButton(props) {
    return (
        <div>
            {/* Add hoverable icons */}
            {/* <img src={props.icon} alt={props.name} /> */}
                <button onClick={props.onClick} id={props.id} className={`card-btn ${props["data-name"]}`} {...props}> <span id={props.className}> {props.name} </span></button>
        </div>
    )
}