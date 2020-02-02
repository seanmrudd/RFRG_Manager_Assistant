import React, { Component } from "react";
import { Redirect, useHistory, Link } from 'react-router-dom';
import "./style.css";
import MenuButton from "../MenuButton";
import Col from "../Col";
import Row from "../Row";
import menuOptions from "../../assets/mainMenu.json";

export default class Menu extends Component {
    state = {
        menuOptions,
        menuBtn: ""
    }

    render() {
        return (
            <div className="menuWrapper">
                {this.state.menuOptions.map((menuOption) => (
                    <Row>
                        <Col>
                            <Link to={menuOption.link}>
                                <MenuButton
                                    key={menuOption.id}
                                    data-name={menuOption.class}
                                    className={menuOption.class}
                                    name={menuOption.name}
                                    id={menuOption.className}
                                // Add hoverable icons
                                // icon={menuOption.icon}
                                />
                            </Link>
                        </Col>
                    </Row>
                ))}
            </div>)
    }
}