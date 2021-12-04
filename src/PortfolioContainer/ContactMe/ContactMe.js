import React, {useState , useRef} from "react";
import imgBack from "../../assets/ContactMe/eback.png"
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollServiceeee";
import Animation from "../../utilities/Animation";
import Typical from "react-typical";
import {FaFacebook, FaGoogle, FaInstagram} from "react-icons/fa";
import "./ContactMe.css"
import axios from "axios";
import {toast} from "react-toastify";
import emailjs from 'emailjs-com';

export default function ContactMe(props){

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen != props.id)
            return
        Animation.animation.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }
    console.log(name)

         const sendEmail = (e) => {
             e.preventDefault();

             if(name.length === 0 || email.length === 0 || message.length === 0){
                 setBanner("Please complete all required fields");
                 return toast.error("Please complete all required fields")}
             else emailjs.sendForm('service_q7j4hyi', 'template_z03yanv', e.target, 'user_SeXSIXepRZm1VNU7DHlhG')
                 .then((result) => {
                     console.log(result.text);
                     setBanner("Email has been sent")
                     toast.success("Success, I will contact u :)")
                 }, (error) => {
                     console.log(error.text);
                 });
                         setName("")
                         setEmail("")
                         setMessage("")
         };


         return (
             <div className="main-container fade-in" id={props.id || ""}>
                 <ScreenHeading subHeading={"Lets Keep In Touch"}
                                title={"Contact Me"}>
                 </ScreenHeading>
                 <div className="central-form">
                     <div className="col">
                         <h2 className="title">
                             {""}
                             <Typical
                                 loop={Infinity}
                                 steps={[
                                     'Get In Touch ✉',
                                     1000,
                                 ]}
                             />
                         </h2>
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
                     <div className="back-form">
                         <div className="img-back">
                             <h4>Send Your Email Here!</h4>
                             <img src={imgBack} alt="img not found"/>
                         </div>
                         <form action="" onSubmit={sendEmail}>
                             <p>{banner}</p>
                             <label htmlFor="name">Name</label>
                             <input type="text"
                                    onChange={handleName}
                                    value={name}
                                    name ="to_name"/>

                             <label htmlFor="email">Email</label>
                             <input type="text"
                                    onChange={handleEmail}
                                    value={email}
                                    name = "from_name"/>

                             <label htmlFor="message">Message</label>
                             <textarea type="text"
                                       onChange={handleMessage}
                                       value={message}
                                        name = "message"/>

                             <div className="send-btn">
                                 <button type="submit">
                                     send
                                 </button>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         )
     }