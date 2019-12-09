import React from "react";
import "./style.css";

export default function MenuButton (props) {
    return (
        <div>
            {/* Add hoverable icons */}
            {/* <img src={props.icon} alt={props.name} /> */}
            <button onClick={props.onClick} id={props.id}> {props.name} <span id={props.className}></span></button>
        </div>
    )
}