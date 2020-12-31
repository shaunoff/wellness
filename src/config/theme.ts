import { createMuiTheme } from '@material-ui/core/styles'
//import * as colorManipulator from '@material-ui/core/styles/colorManipulator'

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
    h3: {
      fontSize: 26,
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.75)',
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
      dark: '#004fb0',
      light: '#6ca8ff',
    },
    secondary: {
      main: '#e3f2fd',
      dark: '#b1bfca',
      light: '#ffffff',
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
    MuiTypography: {
      colorTextSecondary: {
        color: 'rgba(0, 0, 0, 0.4)',
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: '0 0 12px #ddd',
      },
    },
    MuiButton: {
      root: {
        // eslint-disable-next-line
        textTransform: 'none' as any,
        fontWeight: 700,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none' as any,
        fontWeight: 700,
      },
    },
    MuiTabs: {
      root: {
        marginTop: '0px',
      },
      indicator: {
        height: '3px',
        borderRadius: '3px',
      },
    },
  },
  //Default props go here.
  props: {
    MuiTextField: {
      //https://github.com/microsoft/TypeScript/issues/8289
      // eslint-disable-next-line
      variant: 'outlined' as any,
      // eslint-disable-next-line
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
