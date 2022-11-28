import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Grid version 1
import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpeg";
import schemmelimage from "../../assets/images/Schemmel1.png";
import "./about.css";

function About() {
  return (
    <div id="about">
      <h1 className="aboutHeader">What is ATG?</h1>
      <Box
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 3,
          gridTemplateColumns: "repeat(2, 1fr)",
          margin: "5rem",
        }}
      >
        <div>
          <img
            className="aboutImg"
            style={{ maxWidth: "100%", height: "auto" }}
            src={image1}
            alt="knee flexion with dumbbells"
          />
        </div>
        <div>
          <h3 className="aboutText">
            ATG is a style of fitness that believes in working from the ground
            up. This means working the FULL RANGE of our feet, ankles, calves,
            knees, hips all the way up to your shoulders and neck. ATG allows us
            to put our egos aside and focus on the weak links in our body
            through REGRESSION. These weak links create the nagging pain we deal
            with in our day to day lives, and ATG is an effective solution.
          </h3>
        </div>
        <div>
          <img
            className="aboutImg"
            style={{ maxWidth: "100%", height: "auto" }}
            src={image2}
            alt="knee flexion with hip extension"
          />
        </div>
      </Box>
      <h1 className="aboutHeader">Get To Know Eric</h1>
      <Grid container spacing={2} sx={{ margin: "5rem" }}>
        <Grid
          item
          xs={4}
          style={{ backgroundImage: `url(${schemmelimage})` }}
          className="profPic"
          alt="Eric Schemmel Profile Pic"
        ></Grid>
        <Grid item xs={6} textAlign="right" className="profText">
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
