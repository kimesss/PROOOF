import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Fotter";
import "./Home.css"
import Header from "./Header/Header";

export default function Home(){
    return(
        <>

        <div className="home-container">
            <Header></Header>
            <Profile></Profile>
            <Footer></Footer>
        </div>

        </>
    )
}