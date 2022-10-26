import React from "react";
import { Container } from "@mui/system";
import About from "../About/About.js";

function Landing() {
  return (
    <div>
      <Container maxWidth="lg">
        <About />
      </Container>
    </div>
  );
}

export default Landing;
