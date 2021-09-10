import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import banner from "../assets/images/banner.jpg";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heading: {
    padding: theme.spacing(5),
    position: "absolute",
    top: theme.spacing(30),
    width: "100%",
    textAlign: "center",
    color: "black",
    backgroundColor: "none",
  },
  bold: {
    paddingBottom: theme.spacing(3),
    fontWeight: 510,
  },
  connectButton: {
    padding: theme.spacing(10),
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box>
        <Card>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="100%"
            image={banner}
            className={classes.container}
          />
          <Box className={classes.heading}>
            <Typography variant="h6">Hi, I'm Jonghyeok</Typography>
            <Typography variant="h3" className={classes.bold}>Data-Driven Software Developer</Typography>
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
        </Card>
      </Box>
    </React.Fragment>
  );
}

export default Header;
