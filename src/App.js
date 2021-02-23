import React from "react";
import AppBar from "./components/AppBar";
import { theme } from "../src/theme";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
    </ThemeProvider>
  );
}

export default App;
