import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BodyComponentStyle.css'

function BodyComponent() {

    const introStyle = {
        marginTop: "5%",
        padding: "15px",
        marginLeft:"10%"
    }

    const exploreButtonStyle = {
        border: "3px solid #DA6896",
        borderRadius: "5px",
        borderColor: "#DA6896",
        padding: "1px",
        color: "#3E587D"
    }

    return (
        <>
            <div  style={introStyle}>
                <div className="Intro" id="div1">Hello, I'm Saudamini Keshav.</div>
                <div className="Intro" id="div2" >I'm an Android Mobile and Full-Stack Web Developer.</div>
                <div className="Intro" id="div3"> <a class="button button--primary welcome__button" href="#skillSetSection" style={exploreButtonStyle}>Explore skills</a></div>
            </div>
        </>
    );

}

export default BodyComponent;