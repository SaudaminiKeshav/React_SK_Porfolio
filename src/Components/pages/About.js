import React from "react";
import HeaderComponent from "../HeaderComponent.js";
import dp from "../../Assets/dp.jpg"
import "./About.css";

function About() {
  return (
    <>
      <HeaderComponent page={"about"} />
      <div>

        <br></br><br></br><br></br><br></br>
        <div className="aboutContainer">
          <div className="container">
            <div className="bg-white ">
              <div className="row justify-content-center py-4 py-lg-5">
                <div className="col-md-10 col-lg-8"></div>
                <img src={dp} alt="My Photo" width="75%" height="auto"></img>
                <br></br><br></br>
                <hr className="my-4"></hr>
                <p style={{ margin: "5%" }}>"I am an Android Mobile/Web Application developer with experience working on several
                projects at companies with different products. I am eager to expand my knowledge and
                gain expertise in Full Stack Web Development.
                Learning Full Stack Web Development would expand my knowledge of Web/Mobile applications
                and their best practices.
								<br></br><br></br>
                          I am quick to adapt, I driven by my curiosity to learn and master whatever I do. I like to resolve design problems, create smart user interface and imagine useful
                            interaction, developing rich web experiences & web applications." The
                          projects I have done at companies with different products showcase my experience.
                          I am looking forward to do what it takes and grow to the next level where I can call
								myself a Hybrid Application Developer, which includes Mobile and Web development.</p>


                <hr className="my-2"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}

export default About;
