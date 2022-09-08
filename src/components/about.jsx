import React from "react";
import "./about.css";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img className="a-img" src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3139&q=80" alt="" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reprehenderit saepe autem dolorem suscipit perferendis excepturi, officia labore maiores.</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque quidem excepturi, est corporis ipsa aliquid molestias fuga, repellendus accusantium tempora veniam sequi perspiciatis, libero quasi neque voluptate omnis.</p>
      </div>
    </div>
  );
}

export default About;
