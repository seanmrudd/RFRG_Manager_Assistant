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

    consoleLog = () => {
        console.log(this.state.menuOptions.map((option) => option))
    }
 
    render() {
        return (
            <div>
                {this.state.menuOptions.map(menuOption => (
                    <Row>
                        <Col>
                            <MenuButton
                            key={menuOption.id}
                            className={menuOption.className}
                            name={menuOption.name}
                            />
                        </Col>
                    </Row>
                ))}
            </div>)
    }
}