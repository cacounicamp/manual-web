import React from "react";
import { Drawer } from "@material-ui/core";


import List from '@material-ui/core/List';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';

import { useStyles } from './styles';



export default function DrawerLeft() {
  
  const classes = useStyles();
  
  return (
      
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />

        <List>
          {[['Prefácio', 'Prefácio'], ['Mensagem da FEEC', 'Mensagem da FEEC'], ['Mensagem do IC', 'Mensagem do IC'], ['Os melhores anos da minha vida ', 'Os melhores anos da minha vida ']].map((chapter, index) => (
            <ListItem button key={chapter}>
              <ListItemIcon>{ (index) + '.'}</ListItemIcon>
              <Link href={chapter[1]}>
                <ListItemText primary={chapter[0]} />
              </Link>
            </ListItem>
          ))}
        </List>

      </Drawer>
  );
}

