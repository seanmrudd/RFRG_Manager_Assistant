import React, { Component } from "react";
import "./style.css";
import MenuButton from "../MenuButton";
import Col from "../Col";
import Row from "../Row";
import menuOptions from "../../assets/mainMenu.json";

export default class Menu extends Component {
    state = {
        menuOptions
    }

    render() {
        return (
            <div className="menuWrapper">
                {this.state.menuOptions.map((menuOption) => (
                    <Row>
                        <Col>
                            <MenuButton
                            key={menuOption.id}
                            className={menuOption.className}
                            name={menuOption.name}
                            id={menuOption.className}
                            // Add hoverable icons
                            // icon={menuOption.icon}
                            />
                        </Col>
                    </Row>
                ))}
            </div>)
    }
}