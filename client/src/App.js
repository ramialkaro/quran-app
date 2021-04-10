import logo from './logo.svg';
import './App.css';
import { Ayah } from './components/Ayah';
import { SuraNames } from './components/SuraNames';
import { ThemeProvider} from '@material-ui/core'
import theme from './theme'
import {
    BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router >
        <Switch>
          <Route exact path="/" component={SuraNames}/>
          <Route path="/sura/:id" component={Ayah}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
