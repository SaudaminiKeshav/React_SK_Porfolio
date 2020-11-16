import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import HeaderComponent from "../HeaderComponent.js"
import design from "../../Assets/design.PNG"

function Home() {
    const introStyle = {
        marginTop: "5%",
        padding: "15px",
        marginLeft: "10%",
    }

    const exploreButtonStyle = {
        borderRadius: "5px",
        borderColor: "#DA6896",
        padding: "1px",
        color: "#ef5350"
    }

    return (
        <>
            <HeaderComponent page={"home"} />
            <div style={introStyle}>
                <div className="Intro" id="div1">Hello! Welcome to my portfolio!</div>
                <div className="Intro" id="div2" >I'm Saudamini Keshav.</div>
                <div className="Intro" id="div2" >I'm an Android Mobile Application Developer and a Full-Stack Web Application Developer.</div>
                <div className="Intro" id="div3"> <a className="button button--primary welcome__button" href="#skillSetSection" style={exploreButtonStyle}>Explore skills</a></div>
            </div>

            <section classsName="skillsSection" id="skillSetSection" style={{ marginTop: "20%", marginBottom: "20%", paddingBottom:"10%", left: "50%", right: "50%", backgroundColor:"rgba(255, 255, 255, 0.3)" }}>
                <div classsName="container py-4">
                    <div classsName="row">
                        <div classsName="col-lg-12 col-md-1 col-xs-12">
                            <h1 classsName="display-2" style={{ fontFamily: 'Arial Narrow, Arial, sans-serif', fontSize: "x-large" }}></h1>
                            <br></br>
                            <a classsName="button button--primary welcome__button" href="#skillsSection"
                                style={{ color: "black", display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", marginLeft: "15%" }}><h3>Skills</h3></a>
                            <hr></hr>
                            <div classsName=" skills" style={{}}>
                                <img src={design} alt="funTechGif"
                                    style={{ position: "relative", width: "75%", height: "100%", backgroundSize: "cover", borderRadius: "10px", display: "block", marginLeft: "auto", marginRight: "auto" }}></img>
                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>
                <section classsName="container skillSetSection" style={{ backgroundColor:"white", borderRadius: "10px", display: "block", marginLeft: "10%", marginRight: "10%", position: "relative", paddingBottom:"10%" }}>
                    <div classsName="container" style={{backgroundColor:"white"}}>
                        <br></br>
                        <br></br>
                        <a classsName="display-2 button button--primary welcome__button"
                            style={{ color: "black", fontFamily: "Arial Narrow, Arial, sans-serif", fontSize: "x-large", color: "black", display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", marginLeft: "15%" }}>List
                    of Tools and Libraries</a>
                        
                    </div>

                    <div classsName="row" style={{ borderRadius: "10px", display: "block", marginLeft: "auto", marginRight: "auto", position: "relative" }}>
                        <div classsName="card border-danger col-lg-4 col-md-6 col-xs-12"
                            style={{ borderRadius: "0 0 15px 15px", marginRight: "5px", height: "auto", backgroundColor:"white" }}>
                            <div classsName="card-body" style={{ display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", color: "black", marginLeft:"20%", marginRight:"20%" }}>
                                <h5 classsName="card-title">Languages</h5>
                                <ul>
                                    <li>Core Java</li>
                                    <li>Kotlin</li>
                                    <li>CSS3 (SCSS)</li>
                                    <li>HTML5 (Twig, Handlebars)</li>
                                    <li>JavaScript (ES6)</li>
                                    <li>Python</li>
                                    <li>PHP</li>
                                    <li>ASP.NET</li>
                                </ul>
                            </div>
                        </div>
                        <div classsName="card border-danger col-lg-4 col-md-6 col-xs-12"
                            style={{ borderRadius: "15px", marginRight: "5px" }}>

                            <div classsName="card-body" style={{ display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", color: "black", marginLeft: "15%" }}>
                                <h5 classsName="card-title" style={{ display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", color: "black", marginLeft: "15%", backgroundColor:"white" }}>Browser Based Technologies</h5>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Responsive Design</li>
                                    <li>Bootstrap</li>
                                    <li>Handlebars</li>
                                    <li>Local Storage, Session Storage, IndexedDB</li>
                                    <li>React.js</li>
                                    <li>API Interaction</li>
                                    <li>API</li>
                                    <li>JSON</li>
                                    <li>AJAX</li>
                                </ul>
                            </div>
                        </div>
                        <div classsName="card border-danger col-lg-4 col-md-6 col-xs-12" style={{ borderRadius: "15px" }}>

                            <div classsName="card-body" style={{ display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", color: "black", marginLeft: "15%" }}>
                                <h5 classsName="card-title" style={{ display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", color: "black", marginLeft: "15%" }} >Android/Kotlin tools and libraries</h5>
                                <ul>
                                    <li>Core Java</li>
                                    <li>Kotlin</li>
                                    <li>Android Architecture Patterns</li>
                                    <li>Retrofit and REST API</li>
                                    <li>Material Design</li>
                                    <li>Espresso</li>
                                    <li>Firebase </li>
                                    <li>Retrofit and RESTful Web Service</li>
                                    <li>RxJava</li>
                                    <li> Custom and Compund UI components</li>
                                    <li>Android’s Animation Framework</li>
                                </ul>
                            </div>
                        </div>
<br></br>
                        <div classsName="card border-danger col-lg-3 col-md-6 col-xs-12"
                            style={{ borderRadius: "15px", marginTop: "10px", marginRight: "5px",  display: "block", marginLeft: "auto", marginRight: "auto", position: "relative"}}>

                            <div classsName="card-body" style={{ display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", color: "black", marginLeft: "15%" }}>
                                <h5 classsName="card-title" style={{ display: "block", marginLeft: "auto", marginRight: "auto", position: "relative", color: "black", marginLeft: "15%" }}>Databases</h5>
                                <ul>
                                    <li>MySQL</li>
                                    <li>MongoDB</li>
                                    <li>SQLite</li>
                                    <li>Android Room Database</li>
                                </ul>
                            </div>
                        </div>
                        <br></br>
                        <div classsName="card border-danger col-lg-3 col-md-6 col-xs-12"
                            style={{ borderRadius: "15px", marginTop: "10px", marginRight: "15%" , marginBottom:"5%"}}>

                            <div classsName="card-body" style={{ display: "block", marginLeft: "auto",  marginBottom:"5%", marginRight: "auto", position: "relative", color: "black", marginLeft: "15%" }}>
                                <h5 classsName="card-title">Deployment/Command-Line Fundamentals</h5>
                                <ul>
                                    <li>Heroku</li>
                                    <li>Git</li>
                                    <li>SVN</li>
                                    <li>GitHub Pages</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Home;