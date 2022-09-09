import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="c">
      <div className="wrapper">
        <div className="c-left">
            <h1 className="cl-title">Holla at Me!</h1>
          <div className="cl-info">
            <p>icon-github</p>
            <p>icon-medium</p>
            <p>icon-twitter</p>
          </div>
        </div>
        <div className="c-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            provident repellat atque nihil, fugit esse voluptas.
          </p>
          <form>
            <input type="text" placeholder="name" name="my_name"></input>
            <input
              type="text"
              placeholder="subject"
              name="user_subject"
            ></input>
            <input type="text" placeholder="email" name="user_email"></input>
            <textarea rows={9} placeholder="message"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
