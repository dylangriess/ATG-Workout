import React from "react";
import { Container } from "@mui/system";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";

function Landing() {
  return (
    <div>
      <Container maxWidth="lg">
        <About />
        <Contact />
      </Container>
    </div>
  );
}

export default Landing;
