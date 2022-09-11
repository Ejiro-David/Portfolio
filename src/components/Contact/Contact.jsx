import React, { useRef } from "react";
import "./Contact.css";
import github from "../branding/github.png";
import medium from "../branding/medium.png";
import linkedin from "../branding/linkedin.png";
import phone from "../branding/phone-call.png";
import pin from "../branding/pin.png";

import emailjs from "@emailjs/browser";

function Contact() {
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
      <div className="wrapper">
        <div className="c-left">
          <h1 className="cl-title">Holla at Me!</h1>
          <div className="cl-info">
            <div className="cl-link">
              <img alt="" src={github}></img>
              <a href="x">Git</a>
            </div>
            <div className="cl-link">
              <img alt="" src={medium}></img> <a href="x">My little blog</a>
            </div>
            <div className="cl-link">
              <img alt="" src={phone}></img>
              <a href="x">+2348158527977</a>
            </div>
            <div className="cl-link">
              <img alt="" src={pin}></img>
              <a href="x">Nigeria</a>
            </div>
            <div className="cl-link">
              <img alt="" src={linkedin}></img>
              <a href="https://www.linkedin.com/in/david-ejiro-erhabor/">Linkedin</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            provident repellat atque nihil, fugit esse voluptas.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name="user_name"></input>
            <input
              type="text"
              placeholder="subject"
              name="user_subject"
            ></input>
            <input type="text" placeholder="email" name="user_email"></input>
            <textarea rows={9} placeholder="message" name="message"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
