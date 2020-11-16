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
                        <Button variant="outlined" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
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
                        <Button variant="outlined" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "23%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
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
                        <Button variant="outlined" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
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
                        <Button variant="outlined" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "25%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
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
                        <Button variant="outlined" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
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
                        <Button variant="outlined" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
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
                        <Button variant="outlined" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
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
                        <Button variant="outlined" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
                        <br />
                    </div>
                </div>
            </div>

            <div className="parallax"></div>

            <div className="container" style={{ clear: "both", float: "left", left: "10%", marginTop: "8%" }}>
                <img src={WorkDayScheduler} alt="Work Day Scheduler"  className="image" style={{ width: "70%", marginBottom: "-20%" }}></img>
                <div className="middle">
                    <div className="text" style={{ width: "110%", textAlign: "center", padding: "1%" }}>
                        <h3 style={{ padding: "5% 5% 0 5%" }}>Work Day Scheduler</h3>
                        <br />
                        <Button variant="outlined" color="#ef5350" style={{ display: "flex", textAlign: "center", marginLeft: "30%", color: "#ef5350", borderHeight: "2px" }}>Explore</Button>
                        <br />
                    </div>
                </div>
            </div>

            <div className="parallax"></div>
        </>
    );
}

// style={{display:"flex",textAlign:"center",marginLeft:"30%", color:"#ef5350", borderHeight:"2px"}}

export default Portfolio;