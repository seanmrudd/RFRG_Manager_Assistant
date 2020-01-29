import React, { Component } from "react";
import { Redirect, useHistory } from 'react-router-dom';
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

    handleBtnClick = event => {
        event.preventDefault();

        this.setState({
            menuBtn: event.target.id
        }, function () {
            this.goToPage();
        });
        
        // if (menuBtn==="toDo"){
        //     alert(this.menuBtn)
        // }
        // switch (menuBtn) {
        //     case "toDo":
        //         alert("hi");
        //         break;
        //     case "managers":
        //         return <Redirect to="/managers" />
        //         break;
        // }
    }

    goToPage = () => {
        const history = useHistory();
        history.push("/todolist")
    }


    render() {
        return (
            <div className="menuWrapper">
                {this.state.menuOptions.map((menuOption) => (
                    <Row>
                        <Col>
                            <MenuButton
                                key={menuOption.id}
                                onClick={this.handleBtnClick}
                                data-name={menuOption.class}
                                className={menuOption.class}
                                name={menuOption.name}
                                id={menuOption.className}
                            // Add hoverable icons
                            // icon={menuOption.icon}
                            >
                            </MenuButton>
                        </Col>
                    </Row>
                ))}
            </div>)
    }
}