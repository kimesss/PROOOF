import Animation from "../../utilities/Animation";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import React from "react";
import ScrollService from "../../utilities/ScrollServiceeee";
import {Project} from "../../utilities/Project/Project";
import map from "../../assets/map/map.jpg"
import game from '../../assets/map/game.jpg'
import portfolio from '../../assets/map/Porfolio.jpg'
import "./Resume.css"

export default function Resume(props){

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen != props.id)
            return
        Animation.animation.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
    return(
        <div className="resume-container fade-in" id={props.id || ""}>
            <ScreenHeading subHeading={"My Projects"}
                           title={"Projects"}>
            </ScreenHeading>
            <div className="resume-container-form">
                <Project description={"CarSharing App"}
                         descriptionbr={"Google Map Api/ geolocation/"}
                         photo={map}
                         github={"https://github.com/kimesss/map"}
                         netlify={"https://react-googlemaps-api-geocoding.netlify.app/"}/>
                <Project description={"StarShip Game"}
                         descriptionbr={"OOP VanillaJS GAME"}
                         photo={game}
                         github={"https://github.com/kimesss/VanillaJSOOPGame"}
                         netlify={"starshipjs.netlify.app/"}/>
                <Project description={"Portfolio"}
                         descriptionbr={"Good React practice"}
                         photo={portfolio}
                         github={"https://github.com/kimesss/PortfolioAndziakNoFinish"}
                         netlify={"https://portfolio-react-andziak-nofinish.netlify.app/"}/>
            </div>
        </div>

    )
}