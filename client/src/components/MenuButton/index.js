import React from "react";
import "./style.css";

export default function MenuButton (props) {
    return (
        <div>
            <button onClick={props.onClick} id={props.id} {...props}>{props.name}</button>
        </div>
    )
}