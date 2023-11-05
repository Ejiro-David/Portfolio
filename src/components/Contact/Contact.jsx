import React, { useRef } from "react";
import "./Contact.css";
import github from "../branding/github.png";
import medium from "../branding/medium.png";
import linkedin from "../branding/linkedin.png";
import phone from "../branding/phone-call.png";
import pin from "../branding/pin.png";

import emailjs from "@emailjs/browser";
import { useContext } from "react";
import { ThemeContext } from "../context";

function Contact() {


  const theme = useContext(ThemeContext);
  const darkMode = theme.state.dark; 







  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0wxitvp",
        "template_38babzc",
        formRef.current,
        "b7gCCWw1Pwlk1U4hj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  
  
  return (
    <div className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="cl-title">Holla at Me!</h1>
          <div className="cl-info">
            <div className="cl-link">
              <img alt="" src={github}></img>
              <a style={{color : darkMode && 'white'}} href="x" target="_blank"  rel="noreferrer">Git</a>
            </div>
            <div className="cl-link">
              <img alt="" src={medium}></img> <a style={{color : darkMode && 'white'}} href="x" target="_blank"  rel="noreferrer">My little blog</a>
            </div>
            <div className="cl-link">
              <img alt="" src={phone}></img>
              <a style={{color : darkMode && 'white'}} href="x">+2348158527977</a>
            </div>
            <div className="cl-link">
              <img alt="" src={pin}></img>
              <a style={{color : darkMode && 'white'}} href="x">Nigeria</a>
            </div>
            <div className="cl-link">
              <img alt="" src={linkedin}></img>
              <a style={{color : darkMode && 'white'}} href="https://www.linkedin.com/in/david-ejiro-erhabor/" target="_blank"  rel="noreferrer">
                Linked
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            provident repellat atque nihil, fugit esse voluptas.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} >
            <inpu style={{backgroundColor : darkMode && '#333'}} type="text" placeholder="name" name="user_name" ></inpu>
            <input style={{backgroundColor : darkMode && '#333'}}
              type="text"
              placeholder="subject"
              name="user_subject"
            ></input>
            <input style={{backgroundColor : darkMode && '#333'}} type="text" placeholder="email" name="user_email"></input>
            <textarea style={{backgroundColor : darkMode && '#333'}} rows={9} placeholder="message" name="message"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}



export default Contact;
