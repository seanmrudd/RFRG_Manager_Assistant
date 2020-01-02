import React, { Component } from "react";
import "./style.css";
import { Animated } from "react-animated-css";
import Menu from "../../components/Menu";
import NavBar from "../../components/Navbar";


export default class MainMenu extends Component {

    render() {
        return (
            <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                <div>
                    <NavBar />
                    <h1>RFRG Manager Assistant</h1>
                    <Menu />
                </div>
            </Animated>
        );
    }
}