import React, { Component } from 'react';
import './style.css';
import NavBar from '../../components/Navbar';


export default class Calendar extends Component {
    render() {
        return (
                <div>
                    <NavBar />
                    <h1>Calendar</h1>
                </div>
        );
    }
}