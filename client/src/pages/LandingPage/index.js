import React, { Component } from "react";
import Logo from "../../assets/images/moes_logo.jpg";
import { Animated } from "react-animated-css";
import "./style.css";
import Menu from "../../components/Menu";

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
                // <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                    <div>
                        <h1>RFRG Manager Assistant</h1>
                        <Menu />
                    </div>
                /* </Animated> */
            )
        }

        return (
            // <Animated animationIn="fadeIn slower" animationOut="fadeOut slower" isVisible={true}>
                <div>
                    <div className="fadeOut">
                        <h1>RFRG Manager Assistant</h1>
                        <img src={Logo} alt="Logo"></img>
                        <h5>a Shrudder Production</h5>
                    </div>
                </div>
            // </Animated>
        );
    }
}