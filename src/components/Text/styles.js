import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 300;

export const useStyles = makeStyles((theme) => ({
  
    margenText: {
        width: `calc(90% - ${drawerWidth}px)`,
        marginLeft: drawerWidth ,
      },
   
    toolbar: theme.mixins.toolbar,
    
   }));