import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "90px 0 50px 0",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: "400px",
    width: "300px",
    objectFit: "cover",
    "@media (min-width: 1024px)": {
      width: "500px",
      height: "600px",
    },
  },
}));

function About() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div id="aboutme">
        <Container className={classes.container}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="row"
            spacing={0}
          >
            <Grid item>
              <img
                // src="https://res.cloudinary.com/dypjcgzgt/image/upload/v1631654766/KakaoTalk_20210914_130642167_syjtnz.jpg"
                src="https://res.cloudinary.com/dypjcgzgt/image/upload/v1631654766/KakaoTalk_20210914_130643394_yyd0qe.jpg"
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
              <Typography variant="h3" align="center" style={{ padding: "5%" }}>
                About Me
              </Typography>
              <Typography variant="body1" style={{ padding: "0 8% 0% 8%" }}>
                I am a passionate and hardworking Data Science student at Simon
                Fraser University. I love working with quantitative data and
                turning them into a meaningful conclusion. 
                <br/><br/>
                #DataScience #DataEngineer #Full-Stack #Statistics #Economics #Finance
                #Python #JavaScript #R
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default About;
