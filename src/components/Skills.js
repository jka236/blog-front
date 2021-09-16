import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import dataScience from "../assets/images/dataScience.png";
import econ from "../assets/images/econ.png";
import webapp from "../assets/images/webapp.png";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "5%",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
  },
  connectButton: {
    paddingTop: "5%",
  },
  image: {
    height: "55px",
    width: "55px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "8%",
  },
}));

const interests = [
  {
    logo: dataScience,
    title: "Data Science",
    description:
      "Having majored in Data Science, I have learned the foundation of Machine Learning and statistical analysis. I am experienced in data cleaning using Python and R.",
  },
  {
    logo: webapp,
    title: "Web Development",
    description:
      "I have gained sufficient programming skills by doing practical projects including developing an official website for Vancouver Korean Developer & Designer.",
  },
  {
    logo: econ,
    title: "Economics",
    description:
      "I am passionate about Economics and Finance. I have a Bachelor's degree in Economics and worked in the insurance industry as a HR Specialist.",
  },
];

function Skills() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div id="skills">
        <Container maxWidth="xl" className={classes.container}>
          <Typography
            variant="h3"
            align="center"
            style={{ paddingBottom: "50px", fontWeight: 500 }}
          >
            Interest and Skills
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="row"
            spacing={1}
          >
            {interests.map((inter) => (
              <Grid item lg={3}>
                <img src={inter.logo} alt="" className={classes.image} />
                <Typography
                  variant="h4"
                  align="center"
                  style={{ paddingBottom: "2%" }}
                >
                  {inter.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ padding: "3% 15% 10% 15%" }}
                >
                  {inter.description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Skills;
