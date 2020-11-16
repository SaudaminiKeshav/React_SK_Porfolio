import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import HeaderComponent from "../HeaderComponent.js"
import "./Contact.css";

function Contact(props) {
  return (
    <>
      <HeaderComponent page={"contact"} />
      <div>

        <div className="text-black" style={{ top: "100px", width: "150%", height: "10%" }}>

          <div className="row">
            <div className="col-lg-8">
              <br></br>
              <h1 className="display-4 mb-4" style={{ color: "white", textAlign: "center" }}>Contact</h1>
              <hr></hr>
            </div>
          </div>
        </div>

        <div className="container py-2">
          <div className="bg-white" style={{ width: "100%", padding: "1%", borderRadius: "20px" }}>
            <div className=" contactContainer  py-4 py-lg-5" style={{ borderRadius: "20px" }}>
              <div className="col-md-10 col-lg-8" >
                <p>Fields marked with an <span className="text-primary">*</span> are required.</p>
                <form className="py-4" style={{ width: "150%", padding: "1%", borderRadius: "20px" }}>
                  <div className="form-group">
                    <label for="inputName">Name <span className="text-primary">*</span></label>
                    <input type="text" className="form-control" id="inputName"
                      placeholder="Enter your name" required></input>
                  </div>
                  <div className="form-group">
                    <label for="inputEmail">Email <span className="text-primary">*</span></label>
                    <input type="email" className="form-control" id="inputEmail"
                      placeholder="Enter your email address" required></input>
                  </div>
                  <div className="form-group">
                    <label for="messageTetxarea">Message <span className="text-primary">*</span></label>
                    <textarea className="form-control" id="messageTetxarea" rows="9"
                      placeholder="Enter your message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-pill"
                    style={{ backgroundColor: "#F14046", fontWeight: "bold" }}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row py-5">
            <div className="col-lg-15"></div>
          </div>
        </div>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-15"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
