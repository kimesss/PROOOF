import Animation from "../../utilities/Animation";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import React from "react";
import ScrollService from "../../utilities/ScrollServiceeee";
import map from "../../assets/map/map.jpg"

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
                <div className="project">

                        <img className="map"
                            src={map}
                            // height={100}
                            // width={400}
                            alt=""
                        />

                       <div>
                           <p>CarSharing App <br/>
                           Google Map Api/ geolocation/</p>
                           <button>Github</button>
                           <button>Live Demo</button>
                       </div>
                </div>
                <div className="project">

                </div>
                <div className="project">

                </div>

            </div>
        </div>

    )
}