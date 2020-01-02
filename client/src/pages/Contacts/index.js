import React, { Component } from "react";
import "./style.css";
import NavBar from "../../components/Navbar";


export default class Contacts extends Component {
    render() {
        return (
                <div>
                    <NavBar />
                    <h1>Contacts</h1>
                </div>
        );
    }
}