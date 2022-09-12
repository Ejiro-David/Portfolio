import React from "react";
import "./Toggle.css";
import sunny from "../branding/sunny.png";
import moon from "../branding/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../context";

function Toggle() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.dark;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t"  onClick={handleClick}>
      <img alt="" src={sunny} className="t-icon"></img>
      <img alt="" src={moon} className="t-icon"></img>
      <div
        className="t-button"
        style={{ left: darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
}

export default Toggle;
