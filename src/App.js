import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
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
          <SideDrawer />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
