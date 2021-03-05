import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
   
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    
    drawerPaper: {
      width: drawerWidth,
    },

    toolbar: theme.mixins.toolbar,
    
   }));