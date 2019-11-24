import React, { Component } from "react";
import "./style.css";
import { Animated } from "react-animated-css";

export default class MainMenu extends Component {
    render() {
        return (
            <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                <div>
                    <h1>RFRG Manager Assistant</h1>
                </div>
            </Animated>
        );
    }
}