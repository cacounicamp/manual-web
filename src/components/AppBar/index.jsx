import React from "react";
import { AppBar as MaterialAppBar, makeStyles, Toolbar } from "@material-ui/core";
import { useStyles } from './styles';



export default function AppBar(props) {
  const classes = useStyles();

  return (
    <MaterialAppBar position= "fixed" className = {classes.appBar}>
      <Toolbar>CACo Unicamp - Manual de Ingressante</Toolbar>
    </MaterialAppBar>
  );
}
