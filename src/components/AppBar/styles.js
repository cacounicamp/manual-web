import { makeStyles } from '@material-ui/core/styles';

const appBarWidth = 240;

export const useStyles = makeStyles((theme) => ({
  
    appBar: {
        width: `calc(100% - ${appBarWidth}px)`,
        marginLeft: appBarWidth,
      },
    
   }));