import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'
import * as colorManipulator from '@material-ui/core/styles/colorManipulator'

// declare module '@material-ui/core/styles/createMuiTheme' {
//   interface ThemeOptions {
//     themeName?: string // optional
//   }
// }

const bodyFont = 'Quicksand, Helvetica, sans-serif'
const unit = 4

const baseTheme = {
  typography: {
    fontFamily: bodyFont,
    fontSize: 16,
    fontWeight: 600,
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
      color: 'rgba(0, 0, 0, 0.5)',
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.75)',
    },
    h5: {
      fontSize: 18,
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.75)',
    },
    h6: {
      fontSize: 16,
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.75)',
    },
  },

  palette: {
    primary: {
      main: '#247ae3',
    },
    secondary: {
      main: '#a7caf4',
    },
    error: {
      main: '#EB011E',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.75)',
    },
  },

  shape: {
    borderRadius: 4,
  },

  spacing: unit,
  //Overrrides
  overrides: {
    MuiInputBase: {
      input: {
        fontWeight: 500,
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.75)',
      },
    },
    // MuiOutlinedInput: {
    //   input: {
    //     fontWeight: 500,
    //     fontSize: 16,
    //   },
    // },
    MuiChip: {
      label: {
        fontWeight: 600,
      },
    },
    MuiTableCell: {
      head: {
        fontWeight: 700,
        fontSize: 18,
      },
      body: {
        fontWeight: 500,
      },
    },
  },
  //Default props go here.
  props: {
    MuiTextField: {
      //https://github.com/microsoft/TypeScript/issues/8289
      variant: 'outlined' as any,
      size: 'small' as any,
    },
    MuiPaper: {
      elevation: 0,
    },
  },
}

export const theme = createMuiTheme({
  ...baseTheme,
})
