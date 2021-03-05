import React from "react";
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import { theme } from "../src/theme";
import { ThemeProvider } from "@material-ui/core";
import Text from "./components/Text";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Drawer />
      <Text/>
    </ThemeProvider>
  );
}

export default App;
