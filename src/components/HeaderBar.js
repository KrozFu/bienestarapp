import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

class Nabvarr extends React.Component {
    render() {
        return (
            <ReactBootStrap.Navbar bg="dark" variant="dark">
                <ReactBootStrap.Navbar.Brand href="#home">Bienestar</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle />
                <ReactBootStrap.Navbar.Collapse className="justify-content-end">
                    <ReactBootStrap.Navbar.Text>
                        Signed in as: <a href="#login">User Unal</a>
                    </ReactBootStrap.Navbar.Text>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        );
    }
}

export default Nabvarr;