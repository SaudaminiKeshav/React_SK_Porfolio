import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import HeaderComponent from "../HeaderComponent.js"

function Home() {
  const introStyle = {
    marginTop: "5%",
    padding: "15px",
    marginLeft:"5%",
}

const exploreButtonStyle = {
    borderRadius: "5px",
    borderColor: "#DA6896",
    padding: "1px",
    color: "#ef5350"
}

return (
    <>
    <HeaderComponent  page={"home"}/>
        <div  style={introStyle}>
            <div className="Intro" id="div1">Hello! Welcome to my portfolio!</div>
            <div className="Intro" id="div2" >I'm Saudamini Keshav.</div>
            <div className="Intro" id="div2" >I'm an Android Mobile Application Developer and a Full-Stack Web Application Developer.</div>
            <div className="Intro" id="div3"> <a className="button button--primary welcome__button" href="#skillSetSection" style={exploreButtonStyle}>Explore skills</a></div>
        </div>
    </>
);
}

export default Home;