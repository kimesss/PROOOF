import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Fotter";
import "./Home.css"
import Header from "./Header/Header";

export default function Home(){
    return(
        <>

        <div className="home-container">
            {/*<div className="left-flare horizontal-flare"></div>*/}
            {/*<div className="right-flare horizontal-flare"></div>*/}
            {/*<div className="full-flare horizontal-flare"></div>*/}
            {/*<div className="lens-center"></div>*/}
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            {/*<div className="conic-1"></div>*/}
            {/*<div className="conic-2"></div>*/}
            {/*<div className="conic-3"></div>*/}
            <Header></Header>
            <Profile></Profile>
            <Footer></Footer>
        </div>

        </>
    )
}