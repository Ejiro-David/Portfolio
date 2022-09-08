import React from "react";
import "./intro.css";
import me from "../../images/me.jpeg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">Ejiro David</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Bugs Creator</div>
              <div className="i-title-item">Pro Googler</div>
              <div className="i-title-item">Yansh Warrior</div>
            </div>
          </div>
          <p className="i-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            possimus laudantium dolores quidem maxime ducimus ipsum amet? alias
            dicta cumque odio praesentium quas?
          </p>
        </div>
        <img
          className="i-scroll"
          stroke='red'
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADiklEQVRoge2aS08UQRDHf4AguBEvLG7EGB8XEg8ejOIBEmMIfAIVb2J8XY0HL34MY4hnY/RuTLwYgxglPoCAPBJjFCMH40HXKOIBPFS1veyu09MzPSsi/2TTZKa6qv4z1V1N1dQRFvuAfqAb6AR2Aa16rwjMAzPACHAfeBPYfio0AKeAx8CKx28ZITSgOv4q+oBZrHOfgZvAWeAQkAca9ZfXa+eAW8CXknkzQG+NfQegBbhR5sigXvfRcQaYK9EzBDQH9TQCeeCZGv4GXAI2pdDXCFwGFlXnqNrIFHnk6a8gT3J/DPlx4Dlu5w4DC6p7OoZ8YrRg38SLGIbagUls2EzqtSh0IMTNm8kkzMyamMNNYjswReVONaX3otCBfTPXU/hbFX3YNeEKpwISGmYTWCn7e1plotCFXTPHEntdhgbsFnsphvwE1vEClkgBS2Y8hp6rKvuKQHnmVIljcXanUWAM+9QNEfTaOPA0hp4cNsROePj7R5iMfTrh/FIivrigcx8lnP8b+5CjxGf8kl0p0hDZgpzRloHdUYL1DkX9QB1wF1l8tcZ34J760B8l6CLSrePDAE4lxQMde6KEXEQ6dZzwMPwSWdDVttiC6hr10Gdsd0ZKOfAJie82T8Ou7XfMQ1+7zvnoMacCS6qkyWNOqcPVEqIhGBebdd4PjzkVSLrjtFP9iDIL7KihH0EUlJNJSiKtH0EUmMU9gV84hfYjvYJAcPrh2n7/GawbInH/114L4RWJ/+6N1GXqhRvOiFg3b2SDyFrDBpG1BheRnzr6HONDY7OOS1FCLiJfdWyNlMoW23QsRgm5iLzXcU9qd5Jjr47zUUIuItM6HkjtTnIY2zNRQi4iIzoGq78mgLGdqki3FymOfUGKZbVGDlmnzgJdHIwgZ53BtIoS4KzaHg6hbADbF0nTYvNFE/BabR8PobAB2++4HEJhTFzBdrqCJe5eVbqINGGyxkGk7hu00WMwpIo/IO2xrLAT2xe5loWBZqRmazpOWZDZiS25PsEeT4Ijj10vC4QNsyOsbk/71JsToQ37ZhaRXl8uhb5GZGGb5ucTakDCoBlpHZvC2QJwEb+kmUPyhNlil5E1kVk4ReEY0nU1hIrAbeA8EnZ5JB80IbXgLqQveAfJ2KUfExytse8VqAdOImehZfw+cxpGkl3qPBG6zLMH+bigB+kw7Qa26r0i8I7VH569DWX4F3yiFoLurY9SAAAAAElFTkSuQmCC"
        />
      </div>
      <div className="i-right">
        <img src={me} alt="" className="i-img"></img>
      </div>
    </div>
  );
};

export default Intro;
