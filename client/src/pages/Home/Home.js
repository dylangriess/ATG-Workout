import React from "react";
import { Container } from "@mui/system";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import Blog from "../Blog/Blog.js";

function Home() {
  return (
    <div id="home">
      <Container maxWidth="lg">
        <About />
        <Contact />
        <Blog />
      </Container>
    </div>
  );
}

export default Home;
