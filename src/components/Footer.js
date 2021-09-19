import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import email from "../assets/icons/email.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  icons: {
    display: "inlineBlock",
    height: "10%",
    width: "10%",
    marginLeft: "2%",
    marginRight: "2%",
    "@media (min-width: 1024px)": {
      height: "6%",
      width: "6%",
    },
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://jonghyeok.tech/">
        Jonghyeok Kim
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#eeeeee" }}>
        <Container maxWidth="md" component="footer" className={classes.footer}>
          {/* <Grid container justify="center"> */}
          <a href="https://github.com/jka236" target="_black">
            <img src={github} alt="" className={classes.icons} />
          </a>
          <a href="mailto:jka236@sfu.ca">
            <img src={email} alt="" className={classes.icons} />
          </a>
          <a
            href="https://www.linkedin.com/in/jonghyeok-kim-412b59200/"
            target="_black"
          >
            <img src={linkedin} alt="" className={classes.icons} />
          </a>

          {/* </Grid> */}
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Footer;
