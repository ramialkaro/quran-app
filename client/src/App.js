import logo from "./logo.svg";
import "./App.css";
import { Ayah } from "./components/Ayah";
import { SuraNames } from "./components/SuraNames";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideDrawer from "./components/SideDrawer";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={SideDrawer} />
            <Route path="/sura/:id" component={Ayah} />
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
