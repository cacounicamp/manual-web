import React from "react";
import AppBar from "./components/AppBar";
import Drawer from "./Drawer";
import { theme } from "../src/theme";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Drawer />
    </ThemeProvider>
  );
}

export default App;
