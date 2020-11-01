
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../SearchComponentStyle.css"

function SkillsComponent() {


    const navstyle = {
        width: "150%",
        fontSize: "135%",
        marginRight: "30px"
    }
    const titlestyle = {
        width: "10%",
        fontSize: "175%"
    }

    const progressStyle = {
        backgroundColor:"blue"
    }

    return (
        <>

            <div id="skll" className="skills">
                <div className="container">
                    <div className="sk_title">
                        <h2>Who we are</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="skills-bars row">
                        <div className="col-md-6">
                            <ul className="skills-bar-container">

                                <li>
                                    <div className="row">
                                        <div className="col-sm-2 icon">
                                            <div id="h-icon"><i className="mIcon fab fa-java"></i></div>
                                        </div>
                                        <div className="col-sm-10 show">
                                            <div className="progressbar-title">
                                                <h3>Java</h3>
                                                <span className="percent" id="java-pourcent"></span>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={progressStyle}></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div className="col-sm-2 icon">
                                            <div id="h-icon"><i className="mIcon fab fa-js-square"></i></div>
                                        </div>
                                        <div className="col-sm-10 show">
                                            <div className="progressbar-title">
                                                <h3>JavaScript / jQuery</h3>
                                                <span className="percent" id="javascript-pourcent"></span>
                                            </div>
                                            <div className="bar-container">
                                                <span className="progressbar progressblue" id="progress-javascript"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div className="col-sm-2 icon">
                                            <div id="h-icon"><i className="mIcon fab fa-html5"></i></div>
                                        </div>
                                        <div className="col-sm-10 show">
                                            <div className="progressbar-title">
                                                <h3>HTML5</h3>
                                                <span className="percent" id="html-pourcent"></span>
                                            </div>
                                            <div className="bar-container">
                                                <span className="progressbar progresspurple" id="progress-html"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div className="col-sm-2 icon">
                                            <div id="h-icon"><i className="mIcon fab fa-css3-alt"></i></div>
                                        </div>
                                        <div className="col-sm-10 show">
                                            <div className="progressbar-title">
                                                <h3>CSS / SASS</h3>
                                                <span className="percent" id="css-pourcent"></span>
                                            </div>
                                            <div className="bar-container">
                                                <span className="progressbar progressorange" id="progress-css"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div className="col-sm-2 icon">
                                            <div id="h-icon"><i className="mIcon fab fa-react"></i></div>
                                        </div>
                                        <div className="col-sm-10 show">
                                            <div className="progressbar-title">
                                                <h3>React</h3>
                                                <span className="percent" id="react-pourcent"></span>
                                            </div>
                                            <div className="bar-container">
                                                <span className="progressbar progresspink" id="progress-react"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div className="col-sm-2 icon">
                                            <div id="h-icon"><i className="mIcon fab fa-angular"></i></div>
                                        </div>
                                        <div className="col-sm-10 show">
                                            <div className="progressbar-title">
                                                <h3>AngularJS</h3>
                                                <span className="percent" id="angular-pourcent"></span>
                                            </div>
                                            <div className="bar-container">
                                                <span className="progressbar progressgreen" id="progress-angular"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <ul className="skills-bar-container">

                                <li>
                                    <div className="row">
                                        <div className="col-sm-2 icon">
                                            <div id="h-icon"><i className="mIcon fab fa-node-js"></i></div>
                                        </div>
                                        <div className="col-sm-10 show">
                                            <div className="progressbar-title">
                                                <h3>NodeJS</h3>
                                                <span className="percent" id="node-pourcent"></span>
                                            </div>
                                            <div className="bar-container">
                                                <span className="progressbar progressred" id="progress-node"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div className="col-sm-2 icon">
                                            <div id="h-icon"><i className="mIcon fab fa-npm"></i></div>
                                        </div>
                                        <div className="col-sm-10 show">
                                            <div className="progressbar-title">
                                                <h3>NPM</h3>
                                                <span className="percent" id="npm-pourcent"></span>
                                            </div>
                                            <div className="bar-container">
                                                <span className="progressbar progressblue" id="progress-npm"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div className="col-sm-2 icon">
                                            <div id="h-icon"><i className="mIcon fab fa-android"></i></div>
                                        </div>
                                        <div className="col-sm-10 show">
                                            <div className="progressbar-title">
                                                <h3>Android</h3>
                                                <span className="percent" id="android-pourcent"></span>
                                            </div>
                                            <div className="bar-container">
                                                <span className="progressbar progresspurple" id="progress-android"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div className="col-sm-2 icon">
                                            <div id="h-icon"><i className="mIcon far fa-object-ungroup"></i></div>
                                        </div>
                                        <div className="col-sm-10 show">
                                            <div className="progressbar-title">
                                                <h3>Web Design</h3>
                                                <span className="percent" id="web-pourcent"></span>
                                            </div>
                                            <div className="bar-container">
                                                <span className="progressbar progressorange" id="progress-web"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div className="col-sm-2 icon">
                                            <div id="h-icon"><i className="mIcon fas fa-cogs"></i></div>
                                        </div>
                                        <div className="col-sm-10 show">
                                            <div className="progressbar-title">
                                                <h3>App Development</h3>
                                                <span className="percent" id="app-pourcent"></span>
                                            </div>
                                            <div className="bar-container">
                                                <span className="progressbar progresspink" id="progress-app"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div className="col-sm-2 icon">
                                            <div id="h-icon"><i className="mIcon fab fa-html5"></i></div>
                                        </div>
                                        <div className="col-sm-10 show">
                                            <div className="progressbar-title">
                                                <h3>Database</h3>
                                                <span className="percent" id="db-pourcent"></span>
                                            </div>
                                            <div className="bar-container">
                                                <span className="progressbar progressgreen" id="progress-db"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );

}


export default SkillsComponent;