import React from "react";
import { Drawer  } from "@material-ui/core";


import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



export default function DrawerLeft() {

  return (
   
      <Drawer
        variant="permanent"
        anchor="left"
      >
    
        <Divider />
        <List>
          {['Prefácio', 'Mensagem da FEEC', 'Mensagem do IC', '"Os melhores anos da minha vida  se nao fosse esse microbio"'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{ (index)+ '.'}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}