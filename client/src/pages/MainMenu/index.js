import React, { Component } from "react";
import "./style.css";
import { Animated } from "react-animated-css";
import Menu from "../../components/Menu";
import NavBar from "../../components/Navbar";
import { Redirect } from 'react-router-dom';


export default class MainMenu extends Component {

    render() {
        return (
            <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                <div>
                    <NavBar />
                    <h1>Main Menu</h1>
                    <Menu />
                </div>
            </Animated>
        );
    }
}