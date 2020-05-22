import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Animated } from "react-animated-css";
import "./style.css";
import Col from "../../components/Col";
import Row from "../../components/Row";

class Login extends Component {

    state = {
        username: "",
        password: "",
        errorMessage: "",
        hidden: true,
        passwordButton: true
    };

    togglePasswordHidden = (event) => {
        event.preventDefault();
        this.setState({
            hidden: !this.state.hidden,
            passwordButton: !this.state.passwordButton
        })
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };
    render() {

        return (
            <Animated animationIn="fadeIn slower" animationOut="fadeOut" isVisible={true}>
                <div className='content'>
                    <h2>Login</h2>
                    <div className="loginBox">
                        <form className="loginForm" onSubmit={this.handleSubmit}>
                            <Row>
                                <div classname="loginInput">
                                    <Col>
                                        Username: <input className="inputField" type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                                        Password: <input className="inputField" type={this.state.hidden ? "password" : "text"} name="password" placeholder="Password" onChange={this.handleChange} />
                                    </Col>
                                </div>
                            </Row>
                            <button className="loginSubmit">Login</button>
                            <button className="loginShowPassword" onClick={this.togglePasswordHidden}>{this.state.passwordButton ? "Show Password" : "Hide Password"}</button>
                        </form>
                            Need to make an account? <Link to="/SignUp">Click Here</Link>
                        <p>{this.state.errorMessage}</p>
                    </div>
                </div>
            </Animated>
        );
    }
}

export default Login;