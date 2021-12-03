import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollServiceeee";
import Animation from "../../utilities/Animation";
import "./AboutMe.css"
import mee from "../../assets/AboutMe/me.jpg"

export default function AboutMe(props){
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen != props.id)
            return
        Animation.animation.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when" +
            " an unknown printer took a galley of type and scrambled it to make a type specimen " +
            "book. It has survived not only five centuries, but also the leap into electronic t" +
            "ypesetting, remaining essentially unchanged. It was popularised in the 1960s with the ",
        highlights: {
            bullets: [
                "Creative frontEnd developer",
                "webpack",
                "JS And Htmll and CSS skils",
                "React",
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
                        <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
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
                    </div>
                </div>
            </div>
        </div>
    )
}