import React from "react";

function Welcome(){
    return(
        <section id="welcome_section" style={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <header style={{fontFamily : "Quicksand, Arial", textAlign: "left", padding: "120px 100px",
                display: "block"}}>
                <h1 style={{ fontSize: "40", fontWeight: "normal", padding: "20px 0"}}>Hey There!</h1>
                <div>
                    <img style={{ borderRadius: 100, width: "200px", height: "200px", float: "right"}} src={require("../assets/icons/MeLogo.jpeg")} />
                    <h2 style={{ fontSize: "40", maxWidth: "800px", fontWeight: "normal", padding: "20px 0"}} >
                        My name is
                        <span style={{fontWeight: "bold"}}> Peng Bofeng</span>
                        , a passionate professional gameplay and tools
                            engineer who loves to design and develop game-focused
                            applications.
                    </h2>
                </div>
                <h3 style={{ fontSize: "40", fontWeight: "normal", padding: "20px 0"}}>Email me at
                    <span><a href="mailto:xxponline@live.com" target="_blank" style={{padding: "0 0.5rem"}}>xxponline@live.com</a></span>
                </h3>
            </header>
        </section>
    );
}

export default Welcome;