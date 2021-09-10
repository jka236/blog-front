import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import heroBG from '../assets/images/banner.jpg'
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: `url(${heroBG}) no-repeat center center`
  },
  heading: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    paddingTop: 50,
    justifyContent: 'center',
    height: '100%',
  },
  bold: {
    paddingBottom: theme.spacing(3),
    fontWeight: 510,
  },
  connectButton: {
    paddingTop: theme.spacing(10),
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classnames('portfolio-hero', classes.container)}>
          <Box className={classes.heading}>
            <Typography variant="h6">Hi, I'm Jonghyeok</Typography>
            <Typography variant="h3" className={classes.bold}>Data-Driven Full Stack Developer</Typography>
            <Typography variant="h6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </Typography>
            <Typography align="center" className={classes.connectButton}>
              <Button
                variant="outlined"
                href="https://www.linkedin.com/in/jonghyeok-kim-412b59200/"
              >
                CONNECT WITH ME
              </Button>
            </Typography>
          </Box>
      </Box>
    </React.Fragment>
  );
}

export default Hero;
