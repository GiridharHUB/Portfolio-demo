import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Scroll from "./components/ScrollToTop";
import Skills from './components/Skills';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  bigSpace: {
    position: 'absolute',
    top: "200vh",
    width: "100%",
    backgroundColor: "transparent",
    marginTop: "5rem"
  },
  skills: {
    height: 200,
    width: 200,
    position: 'absolute',
    top: "100vh",
    backgroundColor: "red"
  }
})

function App() {
  const classes = styles()
  return (
    <div className="App">
      <Scroll showBelow={250} />
      <ThemeProvider theme={theme}>
        <NavBar />
        <Intro />

          <Skills />

        <div className={classes.bigSpace}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>

  );
}

export default App;
