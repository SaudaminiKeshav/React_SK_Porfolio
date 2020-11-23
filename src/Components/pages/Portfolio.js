import React from "react";
import HeaderComponent from "../HeaderComponent.js";
import "./Portfolio.css";
import VirtualCookbook from "../../Assets/Capture.PNG";
import QuestionsQuiz from "../../Assets/Quiz_Question_Page.png";
import PasswordGenerator from "../../Assets/WithInput-Web.png";
import WorkDayScheduler from "../../Assets/workday-scheduler.PNG";
import TeamSummaryProfileGenerator from "../../Assets/Team_Summary_Profile_Generator.PNG";
import NoteTaker from "../../Assets/Note_Taker.png";
import BudgetTracker from "../../Assets/gif.gif";
import EmployeeTracker from "../../Assets/Employee-Tracker.PNG";
import PitchIT from "../../Assets/PitchIt.PNG";
import Button from '@material-ui/core/Button';
import Footer from "./Footer.js"

import WorkDayVideomp4 from "../../Assets/Work Day Scheduler.mp4";
import VirtualCookbookmp4 from "../../Assets/Virtual Cookbook.mp4";
import pitchit from "../../Assets/pitchitdemo.gif"
import PasswordGeneratormp4 from "../../Assets/PasswordGenerator.mp4";
import teamsummarygenerator from "../../Assets/team-generator-gif.gif"
import noteTaker from "../../Assets/notetaking.gif"
import employeeTracker from "../../Assets/Employee-Tracker.PNG"
import budgetTracker from "../../Assets/gif.gif"
import CodeQuizmp4 from "../../Assets/CodeQuiz.mp4";

const titleStyle = {
    textAlign: "start",
    color: "white",
    marginLeft: "10%",
    marginTop: "5%"
}

function Portfolio() {
    return (
        <>
            <HeaderComponent page={"work"} />
            <h1 style={titleStyle}>PROJECTS</h1>
            <br />
            <br />
            <div className="parallax"></div>

            <div className="container" style={{ float: "left", left: "10%" }}>
                <img src={VirtualCookbook} alt="Virtual Cookbook" className="image" style={{ width: "75%" }}></img>
                <div className="middle">
                    <div className="text" style={{ width: "110%", textAlign: "center", padding: "1%" }}>
                        <h3 style={{ padding: "5% 5% 0 5%" }}>Virtual Cookbook</h3>
                        <br />
                        <Button variant="outlined" color="#ef5350" href="#vrtbook" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
                        <br />
                    </div>
                </div>
            </div>

            <div className="parallax"></div>

            <div className="container" style={{ display: "flex" }}>
                <img src={PitchIT} alt="Pitch It" className="image" style={{ width: "75%" }}></img>
                <div className="middle">
                    <div className="text" style={{ width: "200%", textAlign: "center", padding: "10%" }}>
                        <h3 style={{ padding: "7% 5% 0 7%" }}>Pitch It</h3>
                        <br />
                        <Button variant="outlined" color="#ef5350" href="#pitchit" style={{ display: "flex", textAlign: "center", marginLeft: "23%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
                        <br />
                    </div>
                </div>
            </div>

            <div className="parallax"></div>

            <div className="container" style={{ clear: "both", float: "left", left: "10%", marginTop: "5%" }}>
                <img src={PasswordGenerator} alt="Password Generator" className="image" style={{ width: "75%" }}></img>
                <div className="middle">
                    <div className="text" style={{ width: "110%", textAlign: "center", padding: "1%" }}>
                        <h3 style={{ padding: "5% 5% 0 5%" }}>Password Generator</h3>
                        <br />
                        <Button variant="outlined" color="#ef5350" href="#passwordgenerator" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
                        <br />
                    </div>
                </div>
            </div>

            <div className="parallax"></div>

            <div className="container" style={{ display: "flex", marginTop: "5%" }}>
                <img src={QuestionsQuiz} alt="Code Quiz" className="image" style={{ width: "80%" }}></img>
                <div className="middle">
                    <div className="text" style={{ width: "150%", textAlign: "center", padding: "5%" }}>
                        <h3 style={{ padding: "5% 5% 0 0" }}>Code Quiz</h3>
                        <br />
                        <Button variant="outlined" href="#codequiz" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "25%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
                        <br />
                    </div>
                </div>
            </div>

            <div className="parallax"></div>

            <div className="container" style={{ clear: "both", float: "left", left: "10%", marginTop: "3%" }}>
                <img src={TeamSummaryProfileGenerator} alt="TeamSummaryProfileGenerator" className="image" style={{ width: "70%", marginBottom: "-20%" }}></img>
                <div className="middle">
                    <div className="text" style={{ width: "75%", textAlign: "center", padding: "1%" }}>
                        <h3 style={{ padding: "5% 5% 0 5%" }}>Team Summary Profile Generator</h3>
                        <br />
                        <Button variant="outlined" href="#teamsummarygenerator" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
                        <br />
                    </div>
                </div>
            </div>

            <div className="parallax"></div>

            <div className="container" style={{ display: "flex", marginTop: "3%" }}>
                <img src={NoteTaker} alt="NoteTaker" className="image" style={{ width: "80%", height: "100" }}></img>
                <div className="middle">
                    <div className="text" style={{ width: "150%", textAlign: "center", padding: "5%" }}>
                        <h3 style={{ padding: "5% 5% 0 5%" }}>Note Taker</h3>
                        <br />
                        <Button variant="outlined" href="#noteTaker" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
                        <br />
                    </div>
                </div>
            </div>

            <div className="parallax"></div>

            <div className="container" style={{ clear: "both", float: "left", left: "10%", marginTop: "8%" }}>
                <img src={BudgetTracker} alt="BudgetTracker" className="image" style={{ width: "70%", marginBottom: "-20%" }}></img>
                <div className="middle">
                    <div className="text" style={{ width: "110%", textAlign: "center", padding: "1%" }}>
                        <h3 style={{ padding: "5% 5% 0 5%" }}>Budget Tracker</h3>
                        <br />
                        <Button variant="outlined" href="#budgetTracker" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
                        <br />
                    </div>
                </div>
            </div>

            <div className="parallax"></div>

            <div className="container" style={{ display: "flex", marginTop: "8%" }}>
                <img src={EmployeeTracker} alt="EmployeeTracker" className="image" style={{ width: "80%", height: "100" }}></img>
                <div className="middle">
                    <div className="text" style={{ width: "130%", textAlign: "center", padding: "5%" }}>
                        <h3 style={{ padding: "5% 5% 0 5%" }}>Employee Tracker</h3>
                        <br />
                        <Button variant="outlined" href="#employeeTracker" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
                        <br />
                    </div>
                </div>
            </div>

            <div className="parallax"></div>

            <div className="container" style={{ clear: "both", float: "left", left: "10%", marginTop: "8%" }}>
                <img src={WorkDayScheduler} alt="Work Day Scheduler" className="image" style={{ width: "70%", marginBottom: "-20%" }}></img>
                <div className="middle">
                    <div className="text" style={{ width: "110%", textAlign: "center", padding: "1%" }}>
                        <h3 style={{ padding: "5% 5% 0 5%" }}>Work Day Scheduler</h3>
                        <br />
                        <Button variant="outlined" href="#workdayscheduler" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
                        <br />
                    </div>
                </div>
            </div>

            <div className="parallax"></div>

            <div class="project-details" style={{ paddingTop: "10%", height: "50%", color: "white", marginTop: "20%", marginLeft: "5%", marginRight: "5%" }}>
                <div id="vrtbook">
                    <hr style={{ backgroundColor: "white", margin: "5%", height: "50%" }}></hr>
                    <br></br>
                    <div id="modal01" className="w3-modal" onclick="this.style.display='none'" style={{ width: "50%", height: "50%", float: "right", marginLeft: "5%" }}>
                        <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                        <div className="w3-modal-content w3-animate-zoom" style={{ height: "50%", marginTop: "-100px" }}>
                            <video width="85%" height="50%" controls autoplay>
                                <source src={VirtualCookbookmp4}
                                    type="video/mp4" style={{ height: "50%" }}></source>
                    Your browser does not support the video tag.
                </video>
                        </div>
                    </div>
                    <h1>Virtual Cookbook</h1>
                    <br></br>
                    <h5> Website Link - <a href="https://jandrews16.github.io/virtual-cookbook/"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Virtual Cookbook</a></h5>
                    <h5> GitHub repository Link - <a href="https://github.com/SaudaminiKeshav/virtual-cookbook"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Virtual Cookbook</a></h5>
                    <h5>Description -</h5>
                    <p style={{ width: "50%" }}>
                        This application allows users to create their own virtual cookbook
                        as well as find recipes based on their desired ingredients. Key features the ability
                        to save personal recipes on different devices as well as search and save recipes
                    based on specific ingredients.</p>
                    <br></br><br></br>  <br></br>
                </div>

                <div id="pitchit">
                    <hr style={{ backgroundColor: "white", margin: "5%" }}></hr>
                    <div id="modal01" className="w3-modal" onclick="this.style.display='none'" style={{ width: "50%", height: "auto", float: "right", marginLeft: "5%" }}>
                        <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                        <div className="w3-modal-content w3-animate-zoom">
                            <img src={pitchit}></img>
                        </div>
                    </div>
                    <h1>Pitch It</h1>
                    <br></br>
                    <h5> Website Link - Coming soon!</h5>
                    <h5> GitHub repository Link - <a href="https://github.com/SaudaminiKeshav/PitchIT"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Virtual Cookbook</a></h5>
                    <h5>Description -</h5>
                    <p style={{ width: "50%" }}>
                        This application will allow like-minded outdoors-men and women to plan unique trips with
                        their friends. The users will be able to create new adventures, invite friends, choose a location, and write out all the supplies they may need.</p>
                </div>

                <div id="codequiz" style={{ paddingTop: "10%", color: "white", marginLeft: "5%", marginRight: "5%" }}>
                    <hr style={{ backgroundColor: "white", margin: "5%" }}></hr>
                    
                    <div id="modal02" className="w3-modal" onclick="this.style.display='none'" style={{ width: "50%", height: "auto", float: "right", marginLeft: "5%" }}>
                        <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                        <div className="w3-modal-content w3-animate-zoom">
                            <video width="100%" height="100%" controls autoplay>
                                <source src={CodeQuizmp4} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                        </div>
                    </div>
                    <h1>Code Quiz</h1>
                    <br></br>
                    <h5> Website Link - <a href="https://saudaminikeshav.github.io/Code-Quiz/"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Code Quiz</a></h5>
                    <h5> GitHub repository Link - <a href="https://github.com/SaudaminiKeshav/Code-Quiz"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Code Quiz</a></h5>
                    <h5>Description -</h5>
                    <p style={{ width: "50%" }}>
                        This web application is timed code quiz with multiple-choice
                        questions and a easy to understand code quiz review section. This app will run
                        in the browser and feature dynamically updated HTML and CSS powered by your
                        JavaScript code. It will also feature a clean and polished user interface and be
                        responsive, ensuring that it adapts to multiple screen sizes.
                </p>
                    <br></br> <br></br>
                </div>

                <div id="teamsummarygenerator" style={{ color: "white", marginLeft: "5%", marginRight: "5%" }}>
                    <hr style={{ backgroundColor: "white", margin: "5%" }}></hr>
                    <br></br>
                    <div id="modal03" className="w3-modal" onclick="this.style.display='none'" style={{ width: "50%", height: "50%", float: "right", marginLeft: "5%", marginTop:"-50px" }}>
                        <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                        <div className="w3-modal-content w3-animate-zoom">
                            <img src={teamsummarygenerator} style={{ width: "85%", height: "50%"}}></img>
                        </div>
                    </div>
                    <h1>Team Summary Generator</h1>
                    <br></br>.
                <h5> Website Link - CLI application</h5>
                    <h5> GitHub repository Link - <a href="https://github.com/SaudaminiKeshav/Team-Profile-Summary-Generator"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Team Summary Generator</a></h5>
                    <h5>Description -</h5>
                    <p style={{ width: "50%" }}>
                        This web application is a software engineering team generator command line application that helps generator a Summary of the team. 
                        The application will prompt the user for information about the team manager and then information about the team members.
                </p>
                    <br></br>
                </div>

                <div id="passwordgenerator" style={{ color: "white", marginLeft: "5%", marginRight: "5%" }}>
                    <hr style={{ backgroundColor: "white", margin: "5%" }}></hr>
                    <br></br>
                    <div id="modal03" className="w3-modal" onclick="this.style.display='none'" style={{ width: "50%", height: "auto", float: "right", marginLeft: "5%" }}>
                        <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                        <div className="w3-modal-content w3-animate-zoom">
                            <video width="100%" height="100%" controls autoplay>
                                <source src={PasswordGeneratormp4} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                        </div>
                    </div>
                    <h1>Password Generator</h1>
                    <br></br>.
                <h5> Website Link - <a href="https://saudaminikeshav.github.io/Password-Generator/"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Password Generator</a></h5>
                    <h5> GitHub repository Link - <a href="https://github.com/SaudaminiKeshav/Password-Generator"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Password Generator</a></h5>
                    <h5>Description -</h5>
                    <p style={{ width: "50%" }}>
                        This web application helps to generate a random password based
                        on
                        user-selected criteria. This app will run in the browser and feature dynamically updated
                        HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user
                        interface and be responsive, ensuring that it adapts to multiple screen sizes.
                </p>
                    <br></br>
                </div>

                <div id="workdayscheduler" style={{ paddingTop: "10%", color: "white", marginLeft: "5%", marginRight: "5%" }}>
                    <hr style={{ backgroundColor: "white", margin: "5%" }}></hr>
                    <br></br>
                    <img src={WorkDayScheduler} alt="Work Day Scheduler" width="50%" height="auto" style={{ float: "right" }}></img>
                    <h1>Workday Scheduler</h1>
                    <br></br>
                    <h5> Website Link - <a href="https://saudaminikeshav.github.io/Work-Day-Scheduler/"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Workday Scheduler</a></h5>
                    <h5> GitHub repository Link - <a href="https://github.com/SaudaminiKeshav/Work-Day-Scheduler"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Workday Scheduler</a></h5>
                    <h5>Description -</h5>
                    <p style={{ width: "50%" }}>
                        This is a simple calendar application that allows the user to
                        save events for each hour of the day. This app will run in the browser and feature
                        dynamically updated HTML and CSS powered by jQuery.

                        You'll need to use the Moment.js library to work with date and time. Be sure to read the
                        documentation carefully and concentrate on using Moment.js in the browser.
                </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                <div id="noteTaker" style={{ color: "white", marginLeft: "5%", marginRight: "5%" }}>
                    <hr style={{ backgroundColor: "white", margin: "5%" }}></hr>
                    <br></br>
                    <div id="modal03" className="w3-modal" onclick="this.style.display='none'" style={{ width: "50%", height: "50%", float: "right", marginLeft: "5%", marginTop:"-50px" }}>
                        <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                        <div className="w3-modal-content w3-animate-zoom">
                            <img src={noteTaker} style={{ width: "85%", height: "50%"}}></img>
                        </div>
                    </div>
                    <h1>Express Note Taker</h1>
                    <br></br>.
                <h5> Website Link -  <a href="https://note-taker-express-application.herokuapp.com/"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Note Taker</a></h5>
                    <h5> GitHub repository Link - <a href="https://github.com/SaudaminiKeshav/Express-Note-Taker"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Note Taker</a></h5>
                    <h5>Description -</h5>
                    <p style={{ width: "50%" }}>
                    This application can be used to write, save, and delete notes. This NodeJS application uses an Express backend to save and retrieve note data.   </p>
                    <br></br>
                </div>

                <div id="budgetTracker" style={{ color: "white", marginLeft: "5%", marginRight: "5%" }}>
                    <hr style={{ backgroundColor: "white", margin: "5%" }}></hr>
                    <br></br>
                    <div id="modal03" className="w3-modal" onclick="this.style.display='none'" style={{ width: "50%", height: "50%", float: "right", marginLeft: "5%", marginTop:"-50px" }}>
                        <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                        <div className="w3-modal-content w3-animate-zoom">
                            <img src={budgetTracker} style={{ width: "85%", height: "50%"}}></img>
                        </div>
                    </div>
                    <h1>Offline online budget tracker</h1>
                    <br></br>.
                <h5> Website Link -  <a href="https://onlineoffline-budget-tracker.herokuapp.com/"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Offline online budget tracker</a></h5>
                    <h5> GitHub repository Link - <a href="https://github.com/SaudaminiKeshav/Online-Offline-Budget-Tracker"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>Offline online budget tracker</a></h5>
                    <h5>Description -</h5>
                    <p style={{ width: "50%" }}>
                    A budget tracker PWA that uses Webpack and IndexedDB for online/offline capabilities   </p>
                    <br></br>
                </div>

                <div id="employeeTracker" style={{ color: "white", marginLeft: "5%", marginRight: "5%" }}>
                    <hr style={{ backgroundColor: "white", margin: "5%" }}></hr>
                    <br></br>
                    <div id="modal03" className="w3-modal" onclick="this.style.display='none'" style={{ width: "50%", height: "50%", float: "right", marginLeft: "5%", marginTop:"-50px" }}>
                        <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                        <div className="w3-modal-content w3-animate-zoom">
                            <img src={employeeTracker} style={{ width: "85%", height: "50%"}}></img>
                        </div>
                    </div>
                    <h1>React Employee Directory</h1>
                    <br></br>.
                <h5> Website Link -<a href="https://employee-directory-reactwebapp.herokuapp.com/"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>React Employee Directory</a></h5>
                    <h5> GitHub repository Link - <a href="https://github.com/SaudaminiKeshav/React_Employee_Directory"
                        style={{ fontFamily: "Roboto Slab, serif", color: "#ef5350" }}>React Employee Directory</a></h5>
                    <h5>Description -</h5>
                    <p style={{ width: "50%" }}>
                    An employee directory powered by React which gives user the ability to view entire employee directory at once and have a quick access to their information.    </p>
                    <br></br>
                </div>
            </div>

            {/* <div id="modal01" className="w3-modal" onclick="this.style.display='none'">
                <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                <div className="w3-modal-content w3-animate-zoom">
                    <video width="100%" height="80%" controls autoplay>
                        <source src={VirtualCookbookmp4}
                            type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
            <div id="modal02" className="w3-modal" onclick="this.style.display='none'">
                <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                <div className="w3-modal-content w3-animate-zoom">
                    <video width="100%" height="100%" controls autoplay>
                        <source src={CodeQuizmp4} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
            <div id="modal03" className="w3-modal" onclick="this.style.display='none'">
                <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                <div className="w3-modal-content w3-animate-zoom">
                    <video width="100%" height="100%" controls autoplay>
                        <source src={PasswordGeneratormp4} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>

            <div id="modal04" className="w3-modal" onclick="this.style.display='none'">
                <span className="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
                <div className="w3-modal-content w3-animate-zoom">
                    <video width="100%" height="100%" controls autoplay>
                        <source src={WorkDayVideomp4} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                </div>
            </div> */}
            <Footer />
        </>
    );
}

// style={{display:"flex",textAlign:"center",marginLeft:"30%", color:"#ef5350", borderHeight:"2px"}}

export default Portfolio;