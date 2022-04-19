import React from "react";
import { Link } from "react-router-dom";
import MyScss from "./HelloView/index.module.scss"


const Navigation = () =>{
    return(
      <nav className="about-me-navigation">
          <a className={MyScss.router__nav} href="/css">Click CSS</a>
          <a className={MyScss.router__nav} href="/">Home</a>
      </nav>

    )
}
export default Navigation;