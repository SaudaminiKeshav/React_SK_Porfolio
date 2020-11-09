import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderComponent(props) {

    let activePage = props.page;

    const activeNavStyle = {
        width: "150%",
        fontSize: "120%",
        marginRight: "10px",
        color:"#ef5350"
    }
     
    const navstyle = {
        width: "150%",
        fontSize: "120%",
        marginRight: "10px",
        color:"white"
    }
    const titlestyle = {
        width: "10%",
        fontSize: "255%",
        marginRight: "55%",
        marginLeft: "75px",
        color: "#ef5350",
        fontFamily: 'Caveat, cursive'
    }
 
    // bg="dark" variant="dark" 
    return (
        <>
            <nav style={{ height: "65px", backgroundColor: "#212121", marginLeft: "5px", marginRight: "5px", borderRadius: "15px", color:"white" }} className="navbar navbar-expand-lg navbar-light">
           
            <a style={titlestyle} className="navbar-brand" href="">SK</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                
                    <li className="nav-item active">
                        <a style={ activePage== "home" ? activeNavStyle : navstyle} className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a style={ activePage== "work" ? activeNavStyle : navstyle} className="nav-link" href="/work">Work</a>
                    </li>
                    <li className="nav-item">
                        <a style={ activePage== "about" ? activeNavStyle : navstyle} className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a style={ activePage== "contact" ? activeNavStyle : navstyle} className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );

}

export default HeaderComponent;