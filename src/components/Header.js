import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Link } from "react-scroll"

const useStyles = makeStyles((theme) => ({
  appBarTransparent: {
    backgroundColor: "rgba(255,255,255,0)",
    zIndex: 1,
    "& li:hover": {
      textDecoration: "underline",
    },
  },
  appBarColored: {
    backgroundColor: "rgba(255,255,255)",
    "& li:hover": {
      textDecoration: "underline",
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
  },
  rightToolBar: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
  toolBar: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-evenly"
  },
  hover:{
    paddingRight: '20px',
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  },
  title: {
    display: 'none',
    "@media (min-width: 1024px)": {
      display: 'flex',
      flexGrow: 1,
      '&:hover': {
        textDecoration: 'underline',
        cursor: 'pointer'
      }
    },
    
  },
}));

function Header() {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState("appBarTransparent");

  const navRef = React.useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 1;
      if (show) {
        setNavBackground("appBarColored");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="#000"
          elevation={0}
          className={classes[navRef.current]}
        >
          <Container maxWidth="lg" className={classes.container}>
            <Toolbar className={classes.toolBar}>
              <Typography variant="h7" className={classes.title}>
                <div classname="scrolltop" onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth'})}>
                Jonghyeok 
                </div>
              </Typography>
              <Box>
                <Typography variant="h7" color="inherit" className={classes.hover}>
                  <Link to="aboutme" smooth={true} offset={10}>About Me</Link>
                </Typography>
                <Typography variant="h7" color="inherit" className={classes.hover}>
                <Link to="App" smooth={true} offset={-50}>Portfolio</Link>
                </Typography>
                <Typography variant="h7" color="inherit" className={classes.hover} style={{paddingRight: '0'}}>
                <Link to="skills" smooth={true} offset={-50}>Interest&Skills</Link>
                </Typography>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </React.Fragment>
  );
}

export default Header;
