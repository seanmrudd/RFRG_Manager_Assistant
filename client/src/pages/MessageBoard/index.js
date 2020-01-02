import React, { Component } from "react";
import "./style.css";
import NavBar from "../../components/Navbar";
import Navbar from "../../components/Navbar";


export default class MessageBoard extends Component {
    render() {
        return (
                <div>
                    <Navbar />
                    <h1>MessageBoard</h1>
                </div>
        );
    }
}