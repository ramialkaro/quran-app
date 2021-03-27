import logo from './logo.svg';
import './App.css';
import { Ayah } from './components/Ayah';
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Ayah />
    </ThemeProvider>
  );
}

export default App;
