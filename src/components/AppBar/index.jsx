import React from "react";
import { AppBar as MaterialAppBar, Toolbar } from "@material-ui/core";

export default function AppBar(props) {
  return (
    <MaterialAppBar position="sticky">
      <Toolbar>CACo Unicamp - Manual de Ingressante</Toolbar>
    </MaterialAppBar>
  );
}
