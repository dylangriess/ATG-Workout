import React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpeg";
import schemmelimage from "../../assets/images/Schemmel1.png";
import "./about.css";

function About() {
  return (
    <div id="about">
      <h1 className="aboutHeader">What is ATG?</h1>
      <Grid
        sx={{ margin: "50px", border: "1px solid black" }}
        container
        spacing={2}
        className="aboutContainer"
      >
        <Grid
          item
          xs={12}
          md={4}
          style={{ backgroundImage: `url(${image1})` }}
          className="aboutImage"
          alt="squat knee exercise"
          sx={{ border: "1px solid black" }}
        ></Grid>
        <Grid
          item
          xs={8}
          textAlign="right"
          className="aboutText"
          sx={{ marginBottom: "50px", border: "1px solid black" }}
        >
          <h3>
            Build From The Ground Up. Ankles to knees, knees to hips, hips to
            shoulders… building in this order makes the most bulletproof body
            according to gravity, yet no previous system has ever actually
            programmed its volume accordingly. How do you find out your true
            athleticism and bulletproofing potential if you build out of balance
            from your natural design?
          </h3>
        </Grid>
        <Grid
          item
          xs={8}
          textAlign="left"
          className="aboutText"
          sx={{ border: "1px solid black" }}
        >
          <h3>
            The more we build from the top down, the more pain and injuries we
            accumulate and the more gravity-bound we become. The more we build
            from the ground up, the more we free ourselves of pains and
            injuries, the more athletic we get, and the longer we live with a
            high quality of life.
          </h3>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ backgroundImage: `url(${image2})` }}
          className="aboutImage"
          alt="reverse knee flexion"
          sx={{ marginBottom: "50px", border: "1px solid black" }}
        ></Grid>
      </Grid>
      <h1 className="aboutHeader">Get To Know Eric</h1>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          style={{ backgroundImage: `url(${schemmelimage})` }}
          className="profPic"
          alt="Eric Schemmel Profile Pic"
        ></Grid>
        <Grid item xs={8} textAlign="right" className="aboutText">
          <h3>
            My name is Eric Schemmel. I am certified as one of 50 ATG
            specialists in the entire world, and the ONLY specialist in
            Colorado. I pursued learning about ATG and what it has to offer in
            September 2022, but my passion for health and wellness has embodied
            throughout my adulthood. I believe that a sound mind and body
            contributes to a fulfilled life with greater opportunities. When I
            am not working hard to extend this mindset to others, you can find
            me putting this program into practice skiing in the mountains.
          </h3>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
