import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import "./faq.css";

export default function SimpleAccordion() {
  const questions = [
    {
      label: "What program is best for me?",
      description: `Typically, everyone begins on our Zero Program. This program is great for getting people used to the unique form, and it has a great amount of low-intensity volume training. ATG also has programs of Dense, Standards, and many different protocols we can implement based on your goals and where you are at physically.`,
    },
    {
      label: "How many times should I workout per week?",
      description: `At ATG, 3 days per week is the minimum. We also have packages where you can workout 4 days per week or more. Most people need reps and volume to get back their range of motion, so the more days you come in, the better!`,
    },
    {
      label: "What type of equipment is needed?",
      description: `Our Zero Program is strictly bodyweight! The only thing you need is something to elevate your body and your heels. You can easily use stairs or household items such as books to get this elevation. Dense and Standards, however, does require dumbbells, barbells and the use of weights. We have everything you may need when you come train with us in person!`,
    },
    {
      label: "What is the length of each workout?",
      description: `Each workout will last approximately 1 hour. We offer short and concise exercises that you can easily incorporate it into your daily routine.`,
    },
    {
      label: "How long is the ATG program?",
      description: `Our minimum is 3 months. This is because we build a customized program specifically for you with your end goal in mind every step of the way. We also offer 6 month and 1 year programs. We do not offer 5 or 10 pack sessions, this is because our ideal clients are highly motivated people that want to change their lives.`,
    },
    {
      label: "How much does the product cost?",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem.`,
    },
    {
      label: "Can I do ATG while on another workout program?",
      description: `Absolutely! ATG is a philosophy on training. We believe that full range of motion on each exercise you perform is optimal to prevent pain and to bulletproof your joints and body. Whether you are trying to lose weight, build muscle, or get toned - we have the program for you!`,
    },
    {
      label: "If I have an injury, is this program still a good fit?",
      description: `Yes! ATG is an exceptionally good program for injuries of any nature. We have the ability and knowledge to progress or regress any exercise to make sure you are getting an amazing workout WITHOUT pain. ATG was founded on the premise of working out of knee pain, and it has developed to be able to treat any injury including: foot, ankle, calf, knee, quadriceps, hamstring, hips, shoulders and elbows.`,
    },
    {
      label: "Do you do group sessions?",
      description:
        "Yes! We offer a 3-month minimum package 3 days per week, where you would be one of 4 participants in a semi-private group session. Get in contact with me if you have any questions!",
    },
    {
      label: "How much does the program cost?",
      description: "See our pricing sheet!",
    },
    {
      label: "What forms of payment do you accept?",
      description:
        "Each client has the opportunity to receive a discount if the entirety of the program is paid up front. We also offer monthly billing via credit card, Venmo, and cash of course!",
    },
    {
      label: "What is the cancellation policy?",
      description: `There are no refunds for missed sessions unless there is an emergency or excusable cause. Of course, we understand things come up, but in order to get results, you need to show up for your sessions and put in the work!`,
    },
  ];
  return (
    <>
      <div id="FAQ" className="FAQContainer">
        <h1 className="FAQHeader">FAQ</h1>
        <Container xs={12}>
          {questions.map((question) => (
            <Accordion
              style={{
                opacity: "80%",
                backgroundColor: "#111111",
                color: "white",
                border: "1px black solid",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>{question.label}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{question.description}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </div>
    </>
  );
}
