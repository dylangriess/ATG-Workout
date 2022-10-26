import React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import image1 from "../../assets/images/image1.jpeg";

function About() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <img src={image1} cols="4" className="aboutImage" />
        </Grid>
        <Grid xs={8} textAlign="right">
          <h3>
            Build From The Ground Up. Ankles to knees, knees to hips, hips to
            shoulders… building in this order makes the most bulletproof body
            according to gravity, yet no previous system has ever actually
            programmed its volume accordingly. How do you find out your true
            athleticism and bulletproofing potential if you build out of balance
            from your natural design?
          </h3>
        </Grid>
        <Grid xs={8}>
          <h3>
            The more we build from the top down, the more pain and injuries we
            accumulate and the more gravity-bound we become. The more we build
            from the ground up, the more we free ourselves of pains and
            injuries, the more athletic we get, and the longer we live with a
            high quality of life.
          </h3>
        </Grid>
        <Grid xs={4}>
          <h1>picture</h1>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
