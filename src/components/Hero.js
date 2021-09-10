import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import banner from "../assets/images/banner.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  heading: {
    padding: theme.spacing(3),
    position: "absolute",
    top: "20%",
    width: "100%",
    textAlign: "center",
    color: "black",
    backgroundColor: "none",
  },
  connectButton: {
    padding: theme.spacing(3),
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Container maxWidth="md" component="footer" className={classes.container}>
        <Typography variant="h5" color="inherit" align="center">
          Hi, I'm Jonghyeok
        </Typography>
        <Typography
          variant="h3"
          color="inherit"
          align="center"
          className={classes.heading}
        >
          Data-Driven Software Developer
        </Typography>
        <Typography variant="h6" color="inherit" align="center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </Typography>
        <Typography align="center" className={classes.connectButton}>
          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/jonghyeok-kim-412b59200/"
          >
            CONNECT WITH ME
          </Button>
        </Typography>
      </Container> */}
      <Container maxWidth="sx" component="footer" className={classes.container}>
        <Card className={classes.container}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="100%"
            image={banner}
          />
          <Typography variant="h5" color="inherit" align="center" >
          Hi, I'm Jonghyeok
        </Typography>
        <Typography
          variant="h3"
          color="inherit"
          align="center"
          className={classes.heading}
        >
          Data-Driven Software Developer
        </Typography>
        <Typography variant="h6" color="inherit" align="center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </Typography>
        <Typography align="center" className={classes.connectButton}>
          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/jonghyeok-kim-412b59200/"
          >
            CONNECT WITH ME
          </Button>
        </Typography>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default Header;
