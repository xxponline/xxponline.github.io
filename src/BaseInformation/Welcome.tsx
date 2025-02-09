import React from "react";
import { ReactComponent as EmailIcon } from "../assets/icons/contact/email-1-svgrepo-com.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/contact/github-142-svgrepo-com.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/contact/linkedin-svgrepo-com.svg";
import { ReactComponent as ResumeIcon} from "../assets/icons/contact/resume-4-svgrepo-com.svg";
import StandardButton from "../Common/StandardButton";

function Welcome(props : { onClickResume_EN : () => void, onClockResume_CN : () => void}){
    return(
        <section id="welcome_section" style={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <header style={{
                fontFamily: "Quicksand, Arial", textAlign: "left", padding: "120px 100px",
                display: "block"
            }}>
                <h1 style={{fontSize: "40", fontWeight: "normal", padding: "20px 0"}}>Hey There!</h1>
                <div>
                    <img style={{borderRadius: 100, width: "200px", height: "200px", float: "right"}}
                         src={require("../assets/icons/MeLogo.jpeg")}/>
                    <h2 style={{fontSize: "40", maxWidth: "800px", fontWeight: "normal", padding: "20px 0"}}>
                        My name is
                        <span style={{fontWeight: "bold"}}> Bofeng</span>
                        , a passionate professional gameplay and tools
                        engineer who loves to design and develop game-focused
                        applications.
                        <p/>
                        <div style={{display: "flex", alignItems: "center"}}>
                            My Background?
                            <StandardButton style={{display: "flex", alignItems: "center"}}
                                            onClick={props.onClickResume_EN}>
                                <ResumeIcon style={{height: "40px", width: "40px", margin: "0 5px"}}/>
                                <span style={{fontSize: "15px"}}>Resume</span>
                            </StandardButton>
                            Or
                            <StandardButton style={{display: "flex", alignItems: "center"}}
                                            onClick={props.onClockResume_CN}>
                                <ResumeIcon style={{height: "40px", width: "40px", margin: "0 5px"}}/>
                                <span style={{fontSize: "15px"}}>个人简历</span>
                            </StandardButton>
                        </div>
                    </h2>
                </div>
                <h3 style={{
                    display: "flex",
                    alignItems: "center",
                    height: "60px",
                    fontSize: "40",
                    fontWeight: "normal",
                    padding: "20px 0"
                }}>
                    <span>Contact Me?</span>
                    <StandardButton style={{display: "flex", alignItems: "center"}} onClick={() => {
                        window.open("mailto:xxponline@live.com")
                    }}>
                        <EmailIcon style={{height: "40px", width: "40px", margin: "0 5px"}}/>
                        <span style={{fontSize: "15px"}}>Email</span>
                    </StandardButton>
                    <StandardButton style={{display: "flex", alignItems: "center"}} onClick={() => {
                        window.open("https://www.linkedin.com/in/xxponline")
                    }}>
                        <LinkedInIcon style={{height: "40px", width: "40px", margin: "0 5px"}}/>
                        <span style={{fontSize: "15px"}}>LinkedIn</span>
                    </StandardButton>
                    {/*<span><a href="mailto:xxponline@live.com" target="_blank" style={{padding: "0 0.5rem"}}>xxponline@live.com</a></span>*/}
                </h3>
                <h3 style={{
                    display: "flex",
                    alignItems: "center",
                    height: "60px",
                    fontSize: "40",
                    fontWeight: "normal",
                    padding: "20px 0"
                }}>
                    <span>By the way, you can visit source of this portfolio website via</span>
                    <StandardButton style={{display: "flex", alignItems: "center"}} onClick={() => {
                        window.open("https://github.com/xxponline/xxponline.github.io")
                    }}>
                        <GithubIcon style={{height: "40px", width: "40px", margin: "0 5px"}}/>
                        <span style={{fontSize: "15px"}}>Github</span>
                    </StandardButton>
                    <span>:)</span>
                </h3>
            </header>
        </section>
    );
}

export default Welcome;
