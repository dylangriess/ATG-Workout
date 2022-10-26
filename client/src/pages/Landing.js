import React from "react";
import { Container } from "@mui/system";
import About from "./About.js";

function Landing() {
  return (
    <div>
      <Container maxWidth="md">
        <About />
      </Container>
    </div>
  );
}

export default Landing;
