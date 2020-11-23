import React from "react";
import HeaderComponent from "../HeaderComponent.js"
import VirtualCookbook from "../../Assets/Capture.PNG";
import QuestionsQuiz from "../../Assets/Quiz_Question_Page.png";
import PasswordGenerator from "../../Assets/WithInput-Web.png";
import WorkDayScheduler from "../../Assets/workday-scheduler.PNG";
import TeamSummaryProfileGenerator from "../../Assets/Team_Summary_Profile_Generator.PNG";
import NoteTaker from "../../Assets/Note_Taker.png";
import BudgetTracker from "../../Assets/gif.gif";
import EmployeeTracker from "../../Assets/Employee-Tracker.PNG";
import Footer from "./Footer.js"

// import './Work.css';

function Work() {
  return (
    <>
      <HeaderComponent page={"work"} />

      <section >


        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            {/* <li data-target="#carouselExampleCaptions" data-slide-to="2"></li> */}
          </ol>
          <div className="carousel-inner">

            <div className="carousel-item active w3-card-4">

              <div className="w3-container w3-card-4" >
                <div className="card" style={{ marginBottom: "5%", float: "left", width: "27%", height: "200%", backgroundColor: "white", marginLeft: "9%", marginTop:"10%", marginBottom:"10%" }}>
                  <img src={VirtualCookbook} alt="Virtual Cookbook" style={{ width: "100%", height: "750%" }}

                  ></img>
                  <div>Virtual Cookbook<br></br> <a className="button " href="#vrtbook"
                    style={{ color: "white", paddingLeft: "15px", paddingRight: "15px" }}>LEARN MORE</a>
                  </div>
                </div>
              </div>

              <div className="w3-container" >
                <div className="card" style={{ float: "left", width: "27%", height: "100px", height: "200%", backgroundColor: "white", marginLeft: "1%", marginTop:"10%", marginBottom:"10%" }}>
                  <img src={QuestionsQuiz} alt="Code Quiz" style={{ width: "100%", height: "750%" }}

                  ></img>
                  <div>Code Quiz<br></br> <a className="button " href="#vrtbook"
                    style={{ color: "white", paddingLeft: "15px", paddingRight: "15px" }}>LEARN MORE</a>
                  </div>
                </div>
              </div>

              <div className="w3-container" >
                <div className="card" style={{ float: "left", width: "27%", height: "500%", backgroundColor: "white", marginLeft: "1%", marginTop: "10%",  marginBottom:"10%" }}>
                  <img src={PasswordGenerator} alt="Password Generator" style={{ width: "100%", height: "750%" }}

                  ></img>
                  <div>Password Generator<br></br> <a className="button " href="#vrtbook"
                    style={{ color: "white", paddingLeft: "15px", paddingRight: "15px" }}>LEARN MORE</a>
                  </div>
                </div>
              </div>

            </div>

            <div className="carousel-item">
              <div className="card" style={{ marginBottom: "5%", float: "left", width: "27%", height: "500%", backgroundColor: "white", marginLeft: "9%",marginTop:"10%", marginBottom:"10%"}}>
                <img src={WorkDayScheduler} alt="Work Day Scheduler" style={{ width: "100%", height: "750%", marginBottom:"10%" }}

                ></img>
                <div>Work Day Scheduler<br></br> <a className="button " href="#vrtbook"
                  style={{ color: "white", paddingLeft: "15px", paddingRight: "15px" }}>LEARN MORE</a>
                </div>
              </div>


              <div className="w3-container" >

                <div className="card" style={{ float: "left", width: "27%", height: "25%", backgroundColor: "white", marginLeft: "1%",marginTop:"10%", marginBottom:"10%"}}>
                  <img src={TeamSummaryProfileGenerator} alt="TeamSummaryProfileGenerator" style={{ width: "100%", height: "25%"}}

                  ></img>
                  <div>Team Summary Profile Generator<br></br> <a className="button " href="#vrtbook"
                    style={{ color: "white", paddingLeft: "15px", paddingRight: "15px" }}>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="w3-container" >

                <div className="card" style={{ float: "left", width: "27%", height: "500%", backgroundColor: "white", marginLeft: "1%", marginTop:"10%", marginBottom:"10%"}}>
                  <img src={NoteTaker} alt="NoteTaker" style={{ width: "100%", height: "750%" }}

                  ></img>
                  <div>Note Taker<br></br> <a className="button " href="#vrtbook"
                    style={{ color: "white", paddingLeft: "15px", paddingRight: "15px" }}>LEARN MORE</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="w3-container" >

                <div className="card" style={{ marginBottom: "5%", float: "left", width: "27%", height: "500%", backgroundColor: "white", marginLeft: "9%", marginTop:"10%", marginBottom:"10%" }}>
                  <img src={BudgetTracker} alt="BudgetTracker" style={{ width: "100%", height: "750%" }}

                  ></img>
                  <div>Budget Tracker<br></br> <a className="button " href="#vrtbook"
                    style={{ color: "white", paddingLeft: "15px", paddingRight: "15px" }}>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="w3-container" >

                <div className="card" style={{ float: "left", width: "27%", height: "500%", backgroundColor: "white", marginLeft: "1%", marginTop:"10%", marginBottom:"10%" }}>
                  <img src={EmployeeTracker} alt="EmployeeTracker" style={{ width: "100%", height: "750%" }}

                  ></img>
                  <div>Employee Tracker<br></br> <a className="button " href="#vrtbook"
                    style={{ color: "white", paddingLeft: "15px", paddingRight: "15px" }}>LEARN MORE</a>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </section>
      <Footer />
    </>
  );
}

export default Work;
