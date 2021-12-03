import React from "react";
import { FaFacebook, FaGoogle ,FaInstagram  } from 'react-icons/fa';
import Typical from 'react-typical'
import "./Profile.css"
import ScrollService from "../../../utilities/ScrollServiceeee";
import me from "../../../assets/Home/me.jpg"

export default function Profile(){
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">

                    <div className="colz">
                        <div className="colz-icon">
                        <a href="https://www.facebook.com/kamil.andziak.7/">
                            <FaFacebook/>
                        </a>
                        <a href="https://github.com/kimesss">
                            <FaGoogle/>
                        </a>
                        <a href="https://www.instagram.com/anndziak/?hl=pl">
                            <FaInstagram/>
                        </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                         <span className=" primary-text">
                        {""}
                        Hello, I'M <span className="highlighted-text">Kamil</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                             <span className=" primary-text">
                                  {""}
                                <h1>
                                    {""}
                                   <Typical
                                      loop={Infinity}
                                        steps={[
                                    "Ethusiatic Dev",
                                    1000,
                                    "Front End DeV",
                                    1000,
                                    "MMA Trainer",
                                    1000,
                                    "React Dev",
                                    1000,
                                ]}
                                />
                                   </h1>
                                          <span className="profile-role-tagline">
                            Interested in programing, technologies, AI and MMA --- focused on frontend
                                              Skills in Js Html and Css
                                                    new in React
                                       </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn" onClick={()=> ScrollService.scrollHandler.scrollToHireMe()}>
                        {""}
                        Hire me{" "}
                    </button>
                    <a href="#">
                        <button className="btn sec-btn">Get my Cv</button>
                    </a>
                </div>
              </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">
                        <img src={me} alt=""/>

                    </div>
                </div>
            </div>
        </div>
    )
}