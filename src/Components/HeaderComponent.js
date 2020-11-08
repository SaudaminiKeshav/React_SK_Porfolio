import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderComponent() {

    const navstyle = {
        width: "250%",
        fontSize: "135%",
        marginRight: "30px",
    }
    const titlestyle = {
        width: "10%",
        fontSize: "255%",
        marginRight: "75%",
        marginLeft: "-75px",
        color: "#e31b6d",
        fontFamily: 'Caveat, cursive'
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "65px", backgroundColor: "black" }}>
                <div className="container">
                    <Navbar.Brand to="/" activeClassName="selected" style={titlestyle}>SK</Navbar.Brand>
                    <Nav className="mr-auto">

                        <Nav.Link to="/" 
                        activeClassName="selected" 
                        style={navstyle} 
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#e31b6a"
                        }}>Home</Nav.Link>

                        <Nav.Link to="/work" 
                        activeClassName="selected" 
                        style={navstyle} 
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#e31b6a"
                        }}>Work</Nav.Link>
                        <Nav.Link to="/about" activeClassName="selected" style={navstyle} activeStyle={{
                            fontWeight: "bold",
                            color: "#e31b6a"
                        }}>About</Nav.Link>
                        <Nav.Link to="/contact" activeClassName="selected" style={navstyle} activeStyle={{
                            fontWeight: "bold",
                            color: "#e31b6a"
                        }}>Contact</Nav.Link>
                    </Nav>
                </div>
            </Navbar>


        </>
    );

}

export default HeaderComponent;