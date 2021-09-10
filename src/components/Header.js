import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBarTransparent: {
    backgroundColor: "rgba(255,255,255,0)",
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: 'row',
    "& li:hover": {
      textDecoration: "underline",
    },
  },
  appBarColored: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "rgba(255,255,255)",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    "& li:hover": {
      textDecoration: "underline",
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
      <CssBaseline />
      <AppBar
        position="fixed"
        color="#000"
        elevation={0}
        className={classes[navRef.current]}
      >
        <Toolbar>
          <Typography variant="h7" color="inherit">
            Jonghyeok Kim
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="h7" color="inherit">
            ABOUT ME
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="h7" color="inherit">
            PORTFOLIO
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="h7" color="inherit">
            SKILLS
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
