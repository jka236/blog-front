import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "10%",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
  },
  connectButton: {
    paddingTop: "5%",
  },
  image: {
    height: "500px",
    width: "400px",
    objectFit: 'cover',
  },
}));

function About() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.container}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={6}
        >
          <Grid item>
            <img
              src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
              className={classes.image}
            />
          </Grid>
          <Grid
            item
            justifyContent="center"
            alignItems="center"
            direction="column"
            lg={6}
          >
            <Typography variant="h3" style={{ paddingBottom: "2%" }}>
              About Me
            </Typography>
            <Typography variant="body1">
              Idempotence is the property of certain operations in mathematics
              and computer science whereby they can be applied multiple times
              without changing the result beyond the initial application. The
              concept of idempotence arises in a number of places in abstract
              algebra and functional programmin
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default About;
