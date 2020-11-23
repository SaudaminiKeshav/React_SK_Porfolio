import React from "react";
import HeaderComponent from "../HeaderComponent.js";
import github from "../../Assets/GitHub Icon.png"
import gmail from "../../Assets/GMail Icon.png"
import linkedin from "../../Assets/linkedin-icon.PNG"
import resumeIcon from "../../Assets/resume-icon.png"
import resume from "../../Assets/SK_Resume_2020 (1).pdf"
import "./About.css";

function Footer() {
    return (
        <>
            <div>

                <footer >
                    <div class="footerContainer" style={{textAlign: "center",boxShadow: "10px 10px grey", backgroundColor:"#212121", marginLeft: "0.5%", marginRight: "1%", borderRadius: "15px"}}>
                        <div class="row row-cols-2 col-lg-8 col-xs-3" style={{textAlign: "center"}}>
                            <div class="footer-body" style={{textAlign: "center"}}>
                                <h5 class="card-footer-title" style={{textAlign: "center"}}><a
                                    href="https://github.com/SaudaminiKeshav" class="contactLink"
                                    style={{marginRight: "20px", marginLeft:"2%", marginRight:"2%"}}><img src={github}
                                        style={{width: "7%", height: "auto"}}></img></a>
                                    <a href="mailto:saudamini.keshav@gmail.com" class="contactLink" style={{}}><img
                                        src={gmail} style={{width: "7%", marginLeft:"2%", marginRight:"2%"}}></img></a>
                                    <a href="https://www.linkedin.com/in/saudamini-keshav-b56a29178/" class="contactLink"><img
                                        src={linkedin} style={{width: "7%", marginLeft:"2%", marginRight:"2%"}}></img></a>
                                        <a href={resume} class="contactLink" ><img
                                        src={resumeIcon} style={{width: "7%", marginLeft:"2%", marginRight:"2%"}}></img></a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>



        </>
    );
}

export default Footer;
