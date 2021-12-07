import React from "react";

import "./index.css";
import RoutesPath from "./routes/routes";

// Material UI
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Sidebar from "./Components/SideBar";

const theme = createTheme({
  palette: {
    background: {
      default: "#fdc15f",
    },
    // yellow
    primary: {
      main: "#fdc15f",
    },
    // red
    secondary: {
      main: "#bb151c",
    },
    white: {
      main: "#ffffff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar />
      <RoutesPath />
    </ThemeProvider>
  );
}

export default App;
