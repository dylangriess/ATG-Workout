import React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1

function About() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={8}>hello</Grid>
        <Grid xs={4}>picture</Grid>
        <Grid xs={4}>hello</Grid>
        <Grid xs={8}>picture</Grid>
      </Grid>
    </>
  );
}

export default About;
