import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { teal, grey, indigo } from '@material-ui/core/colors'
import './App.css';

import Header from "./components/site/Header"
import HelloScreen from "./components/site/HelloScreen"
import Technologies from "./components/site/Technologies"
import Industries from "./components/site/Industries"
import Map from "./components/site/Map"
import ContactForm from "./components/site/ContactForm"
import Footer from "./components/site/Footer"
import LandingLayout from './components/site/UI/LandingLayout';


const adminTheme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[600],
      light: indigo[500],
      dark: indigo[700]
    },
    secondary: {
      main: teal[500],
      light: teal[400],
      dark: teal[600]
    }
  }
})

const siteTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[100], 
      light: teal[400],
      dark: teal[700]
    },
    background: {
      default: "#fff"
    },
    color: {
      default: "fff"
    },
    secondary: {
      main: grey[100],
      dark: grey[800]
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={siteTheme}>
      <LandingLayout />
    </ThemeProvider>
  );
}

export default App;
