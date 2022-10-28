import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Send, Instagram, AlternateEmail } from "@mui/icons-material/";
import "./contact.css";

function Contact() {
  const form = useRef();
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  // TODO: Create a password variable and a function "setPassword" using useState
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // If successful, we want to clear out the input after registration.
    setName("");
    // TODO: Set the password back to an empty string after the user clicks submit
    setMessage("");
    setEmail("");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="contactContainer">
      <h1 className="aboutHeader">Contact</h1>

      <Grid container spacing={2}>
        <Grid xs={6} item alignItems="left" direction="column">
          <h1>Send Me A Message!</h1>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <h2>Name</h2>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <h2>Email</h2>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <h2>Message</h2>
            <textarea
              name="message"
              value={message}
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
              type="submit"
              value="Send"
              style={{ backgroundColor: "#770000", color: "#FFFFFF" }}
              endIcon={<Send />}
            >
              Send
            </Button>
          </form>
        </Grid>

        <Grid xs={6}>
          <div className="contactLinks">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/eric_schemmel/"
                  target="_blank"
                >
                  <Instagram sx={{ fontSize: "3rem" }} /> Instagram
                </a>
              </li>

              <li>
                <a href="mailto:eric.schemmel8@gmail.com" target="_blank">
                  <AlternateEmail sx={{ fontSize: "3rem" }} /> Email
                </a>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
