import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from "./reportWebVitals";
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';

let THEME = createTheme({
	typography: {
	 "fontFamily": "Comic Sans MS",
	 "fontSize": 14,
	 "fontWeightLight": 300,
	 "fontWeightRegular": 400,
	 "fontWeightMedium": 500
	},
	palette: {
		primary: {
		  main: grey[800],
		},
		secondary: {
		  main: grey[400],
		},
	  },
 });
 THEME = responsiveFontSizes(THEME)
 
const routing = (
	<Router>
		<ThemeProvider theme={THEME}>
		<React.StrictMode>
			<Header />
			<Hero />
			<Switch>
				<Route exact path="/" component={App} />
			</Switch>
			<Footer />
		</React.StrictMode>
		</ThemeProvider>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

reportWebVitals();

