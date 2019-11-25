import React, { Component } from "react";
import Logo from "../../assets/images/moes_logo.jpg";
import { Redirect } from "react-router-dom";
import { Animated } from "react-animated-css";
import "./style.css";

export default class LandingPage extends Component {
    state = {
        redirect: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.changeState();
        }, 3000);
    };

    changeState = () => {
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to="menu" />
            )
        }

        return (
            <Animated animationIn="fadeIn slower" animationOut="fadeOut slower" isVisible={true}>
                <div>
                    <div className="fadeOut">
                        <h1>RFRG Manager Assistant</h1>
                        <img src={Logo} alt="Logo"></img>
                        <h5>a Shrudder Production</h5>
                    </div>
                </div>
            </Animated>
        );
    }
}