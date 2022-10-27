import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Blog() {
  const users = [
    {
      firstname: "Michael",
      age: "29",
      review:
        "I’m sore in places I didn’t know was possible to be sore in. That just means he’s making me a better version of myself. Talk about unlocking potential!",
    },
    {
      firstname: "Colin",
      age: "29",
      review:
        "Training with Eric has been awesome! You can really tell how invested he is in the program and feel his passion to help you succeed. I feel the progress in myself already and I can't wait to continue the journey. ",
    },
  ];

  return (
    <div id="blog">
      <h1 className="aboutHeader">Blog</h1>
      <div className="testimonials">
        {users.map((user) => (
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Box
                sx={{
                  width: "30rem",
                  border: "3px solid black",
                  backgroundColor: "black",
                  color: "white",
                  margin: "25px",
                }}
              >
                <Card variant="outlined">
                  <React.Fragment>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {user.firstname}, {user.age}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Roboto Mono",
                          fontWeight: "300",
                          fontSize: "1.5rem",
                        }}
                        variant="body2"
                      >
                        {user.review}
                      </Typography>
                    </CardContent>
                  </React.Fragment>
                </Card>
              </Box>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default Blog;
