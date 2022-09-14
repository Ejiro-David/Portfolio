import React from "react";
import "./about.css";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            className="a-img"
            src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3139&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Work Experience</h1>
        <p className="a-sub">
        {/* some restylings and fancy subheadings go here when I update with real info */}
        <li>HNG</li>
        But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness
        </p>
        <p className="desc">
        <li>HNG</li>
          No one rejects, dislikes or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.
        </p>
        <p className="desc">
        <li>HNG</li>
        To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
        </p>  
      </div>
    </div>
  );
}

export default About;
