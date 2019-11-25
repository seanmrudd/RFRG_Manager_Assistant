import React, { Component } from "react";
import "./style.css";
import MenuButton from "../MenuButton";
import Col from "../Col";
import Row from "../Row";
import menuOptions from "../../assets/mainMenu.json";

export default class Menu extends Component {
    state = {
        menuOptions: [
            menuOptions
        ]
    }

    consoleLog = () => {
        console.log(menuOptions)
    }
 
    render() {
        return (
            <div>
                {this.state.menuOptions.map(menuOption => (
                    <Row>
                        <Col>
                            <MenuButton
                            id={menuOption.id}
                            key={menuOption.id}
                            name={menuOption.name}
                            />
                        </Col>
                    </Row>
                ))}
            </div>)
    }
}