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
            I am 27 and originally from Cedar Rapids, IA. I have a love for the
            outdoors, especially skiing, hiking and biking. I have always been
            into fitness and health. From being an overweight kid that lost 40
            lbs in high school, regaining that weight back in college and losing
            it again after college. I have experienced going through difficult
            lifestyle changes many times in my life. Once I got back into shape,
            I realized I still had nagging pain in my knees and lower back. I
            would stretch everyday thinking my back was tight when in fact, it
            was my hip flexors that were weak and short from sitting all day,
            everyday. ATG refined my skills and taught me revolutionary programs
            to help me gain strength back into my lower back. I am now
            completely pain free thanks to these programs! My goal now is to
            show as many people as possible how to get back their life without
            pain.
          </h3>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
