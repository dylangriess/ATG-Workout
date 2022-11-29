import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./faq.css";

const steps = [
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

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <div id="FAQ" className="FAQContainer">
        <h1 className="FAQHeader">FAQ</h1>
        <Container xs={12}>
          <Box sx={{ maxWidth: 1200 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel sx={{ fontSize: "2rem", color: "red" }}>
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography
                      sx={{
                        fontSize: "1.17em",
                        lineHeight: "40px",
                        fontFamily: "Roboto",
                        marginBottom: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      {step.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          className="FAQbutton"
                          sx={{
                            mt: 1,
                            mr: 1,
                            backgroundColor: "#770000",
                            color: "white",
                          }}
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{
                            mt: 1,
                            mr: 1,
                            color: "#770000",
                          }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper
                square
                elevation={0}
                sx={{ p: 3, background: "rgba(0, 0, 0, 0)" }}
              >
                <Typography
                  sx={{
                    fontSize: "1.5em",
                    lineHeight: "40px",
                    fontFamily: "Roboto",
                    marginBottom: "15px",
                    color: "#770000",
                  }}
                >
                  Contact me if you have additional questions!
                </Typography>
                <Button
                  onClick={handleReset}
                  sx={{ mt: 1, mr: 1, color: "#770000" }}
                >
                  Reset
                </Button>
              </Paper>
            )}
          </Box>
        </Container>
      </div>
    </>
  );
}
