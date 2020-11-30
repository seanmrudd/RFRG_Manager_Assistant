import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Animated } from "react-animated-css";
import "./style.css";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";
import passwordToggle from "../../assets/images/togglePassword.png";

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
            // passwordButton: !this.state.passwordButton
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
                <div>
                    <Container>
                        <h2>Login</h2>
                        <div className="loginBox">
                            <form onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col className="col-sm-6">
                                        <input className="inputField" type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                                    </Col>
                                    <Col className="col-sm-6">
                                        <input className="inputField" type={this.state.hidden ? "password" : "text"} name="password" placeholder="Password" onChange={this.handleChange} />
                                        <span className="loginShowPassword" onClick={this.togglePasswordHidden}><img className="hidePasswordImg" src={passwordToggle} alt="toggle"></img></span>
                                    </Col>
                                </Row>
                                <Row>
                                    <button className="loginSubmit">Login</button>
                                </Row>
                            </form>
                        Need to make an account? <Link to="/SignUp">Click Here</Link>
                        </div>
                        <p>{this.state.errorMessage}</p>
                    </Container>
                </div>
            </Animated>
        );
    }
}

export default Login;
