import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderComponent() {

    const navstyle = {
        width: "150%",
        fontSize: "135%",
        marginRight: "30px"
    }
    const titlestyle = {
        width: "10%",
        fontSize: "175%"
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "65px", backgroundColor: "black" }}>
                <div className="container">
                    <Navbar.Brand href="#home" style={titlestyle}>SK</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={navstyle}>Home</Nav.Link>
                        <Nav.Link href="#about" style={navstyle}>About</Nav.Link>
                        <Nav.Link href="#skills" style={navstyle}>Skills</Nav.Link>
                        <Nav.Link href="#work" style={navstyle}>Work</Nav.Link>
                        <Nav.Link href="#contact" style={navstyle}>Contact</Nav.Link>
                    </Nav>
                </div>
            </Navbar>


        </>
    );

}

export default HeaderComponent;