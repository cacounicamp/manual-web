import { createMuiTheme } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';
import { colors } from '@material-ui/core';

const palette = {
  primary: {
    main: '#00a54f',
  }
}

const typography = {

}

export const theme = createMuiTheme({palette, typography}, ptBR)
