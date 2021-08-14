import "./styles.css";
import { useState } from "react";
import GridSame from "./components/grid";
import CoreElement from "./components/CoreElements";
import MaterialUILayout from "./components/layout";
import Box from "@material-ui/core/Box";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500]
    },
    secondary: {
      main: green[500]
    }
  },
  spacing: 3
});

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: green[500]
    },
    secondary: {
      main: red[500]
    },
    spacing: 3
  }
});

export default function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <>
      <button onClick={() => setDarkMode(!isDarkMode)}>SWITCH THEME </button>
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
        <div className="App">
          <Box m={3}>
            <MaterialUILayout />
          </Box>
          <Box m={3}>
            <CoreElement />
          </Box>

          <Box m={3}>
            <GridSame />
          </Box>
        </div>
      </ThemeProvider>
    </>
  );
}
