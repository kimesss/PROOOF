import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollServiceeee";
import Animation from "../../utilities/Animation";
import "./AboutMe.css"
import mee from "../../assets/AboutMe/me.jpg"
import Navigation from "../../views/Navigation";

export default function AboutMe(props){
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen != props.id)
            return
        Animation.animation.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
        description:
            `- Additionally I am taking part in 1 yearlong MegaK bootcamp, where I am expanding my knowledge and improving my coding abilities.<br/><br/>
                            - I was training classic canoeing for 10 years. I have been representing my club in Polish Championships and I have won some
                            medals. <br/><br/>
                            - I have taken part in some polish running competitions like “Złota Mila” and “Bieg Wedla”. I love sport and I am trying to incorporate
                            it in my daily life.`,
        highlights: {
            bullets: [
                "Creative FrontEnd developer",
                `JavaScript`,
                "HTML and CSS",
                "React",
                "Node and Express",
                "SQL and Mongodb",
                "New in Typescript",
                "Webpack",
            ],
            heading: "Here are a Few Highlights:"
        }
    }
    const renderHighlights = () => {
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className="highlights" key={i}>
                    <div className="highlighted-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    return(
        <div className="about-me-container screen-container fade-in" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"why Choose Me?"}></ScreenHeading>
                <div className="about-me-card">
                    <div className="about-me-profile">
                        <img src={mee} alt=""/>
                    </div>
                    <div className="about-me-details">
                        <span className="about-me-description">
                            - Additionally I am taking part in 1 yearlong MegaK bootcamp, where I am expanding my knowledge and improving my coding abilities.<br/><br/>
                            - I was training classic canoeing for 10 years. I have been representing my club in Polish Championships and I have won some
                            medals. <br/><br/>
                            - I have taken part in some polish running competitions like “Złota Mila” and “Bieg Wedla”. I love sport and I am trying to incorporate
                            it in my daily life. </span>
                        <div className="about-me-highlights">
                            <div className="highlights-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className="about-me-options">
                            <button className="btn primary-btn" onClick={()=> ScrollService.scrollHandler.scrollToHireMe()}>
                                {""}
                                Hire me{" "}
                            </button>
                        </div>
                        <Navigation/>
                    </div>
                </div>
            </div>
        </div>
    )
}