import React from "react";
import Navigation from "../../views/Navigation";
import MyScss from "./index.module.scss"


const HelloView = () =>{
return(
    <>
        <div className={MyScss.full__app}>
            <div className={MyScss.scene}>
                <div className={MyScss.banner}>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                    <div className={MyScss.panel}></div>
                </div>
                <div className={MyScss.box}>
                    <div className={MyScss.floor}></div>
                    <div className={MyScss.circle}></div>
                </div>
            </div>
        </div>

        <div>HelloView</div>
        <Navigation></Navigation>
    </>
)
}
export default HelloView;