import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import heroBG from "../assets/images/banner.jpg";
import classnames from "classnames";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: `url(${heroBG}) no-repeat center center`,
  },
  heading: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: '-40px'
  },
  bold: {
    paddingBottom: "1%",
    fontWeight: 510,
  },
  connectButton: {
    paddingTop: "5%",
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <div id="h">
    <React.Fragment>
      
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classnames("portfolio-hero", classes.container)}
      >
        <Grid item xs={10} className={classes.heading}>
          <Typography variant="h6">Hi, I'm Jonghyeok</Typography>
          <Typography variant="h3" className={classes.bold}>
            Data-Driven Full Stack Developer
          </Typography>
          <Typography variant="h6">
            I'm Data Science student at SFU. My main interest is Data Science, Full Stack Development and Economics
          </Typography>
          <Grid item align="center" className={classes.connectButton}>
            <Button
              variant="outlined"
              href="https://www.linkedin.com/in/jonghyeok-kim-412b59200/"
              target="_blank"
            >
              CONNECT WITH ME
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
    </div>

  );
}

export default Hero;
