import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Landing from "./pages/Landing/Landing.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import Blog from "./pages/Blog/Blog.js";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
