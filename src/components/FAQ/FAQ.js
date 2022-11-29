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
    label: "How much does the product cost?",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem.`,
  },
  {
    label: "What is the cancellation policy?",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem.`,
  },
  {
    label: "If I have an injury, is this program still a good fit?",
    description: `Yes! ATG is an exceptionally good program for injuries of any nature. We have the ability and knowledge to progress or regress any exercise to make sure you are getting an amazing workout WITHOUT pain. ATG was founded on the premise of working out of knee pain, and it has developed to be able to treat any injury including: foot, ankle, calf, knee, quadriceps, hamstring, hips, shoulders and elbows.`,
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
