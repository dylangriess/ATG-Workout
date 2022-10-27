import React from "react";
import "./landing.css";
import image from "../../assets/images/ExerciseWallpaper.jpg";

function Landing() {
  return (
    <div className="container" id="landing">
      <div className="landingBg">
        <img src={image} alt="exercise wallpaper"></img>
      </div>
      <div className="centered">Transform With ATG</div>
    </div>
  );
}

export default Landing;
