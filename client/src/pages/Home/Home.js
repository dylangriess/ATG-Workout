import React from "react";
import { Container } from "@mui/system";
import Landing from "../Landing/Landing.js";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import Blog from "../Blog/Blog.js";

function Home() {
  return (
    <div id="home">
      <Landing />
      <Container maxWidth="lg">
        <About />
        <Contact />
        <Blog />
      </Container>
    </div>
  );
}

export default Home;
