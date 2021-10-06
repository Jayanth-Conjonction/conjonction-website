import { green, grey, red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const CURRENT_THEME = {
  background: "white",
  el1: "black",
  el2: "#263137",
  el3: "#3C464B",
  text: "#210124",
  textInv: "black",
  main: "#4657f2",
  light: "#dfe3e8",
  // secondary: "#4DBBEB",
  mainShadow: "#13232B",
  danger: "#DB162F",
  error: "#f44336",
  // font1: `"Roboto Slab", "Times New Roman", serif`,
  // font2: `"Roboto light"`,
};

const avenir = {
  fontFamily: "Avenir",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `local('Avenir'), format('otf')`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: CURRENT_THEME.light,
      main: CURRENT_THEME.main,
      dark: "#1e1e1f",
    },
    secondary: {
      light: "#dfe3e8",
      main: "#ff3366",
      dark: "#e62958",
    },
    text: {
      light: "grey",
      main: "black",
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e",
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: [
      "Avenir",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 12,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    // fontFamilySecondary: "'Roboto'",
  },
  overrides: {
    MuiBox: {
      background: "#FFFF",
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": [avenir],
      },
    },
    MuiInputLabel: {
      root: {
        // color: "black",
        fontSize: 16,
      },
      // input: {
      //   "&::placeholder": {
      //     color: "black",
      //   },
      // },
    },
    MuiInputBase: {
      input: {
        "&:-webkit-autofill": {
          transitionDelay: "9999s",
          transitionProperty: "background-color, color",
        },
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: CURRENT_THEME.main,
      },
    },
    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: "transparent",
        color: "#ff3366",
      },
      dayLabel: {
        color: CURRENT_THEME.textInv, //days in calendar
      },
      transitionContainer: {
        color: CURRENT_THEME.textInv,
      },
    },
    MuiPickersBasePicker: {
      pickerView: {
        backgroundColor: CURRENT_THEME.background,
      },
      //   backgroundColor: CURRENT_THEME.el3,
    },
    MuiPickersDay: {
      day: {
        color: CURRENT_THEME.textInv, //days in calendar
      },
      daySelected: {
        backgroundColor: "#ff3366", //calendar circle
      },
      //   dayDisabled: {
      //     color: CURRENT_THEME.main, // current day
      //   },
      //   current: {
      //     color: CURRENT_THEME.main,
      //   },
    },
    // MuiButton: {
    //   textPrimary: {
    //     color: CURRENT_THEME.main,
    //   },
    // },

    // MuiDialogActions: {
    //   root: {
    //     backgroundColor: CURRENT_THEME.background,
    //   },
    // },
    MuiPickersClock: {
      clock: {
        backgroundColor: CURRENT_THEME.el2,
      },
      //   pin:{
      //     backgroundColor: CURRENT_THEME.main,
      //   },
      // },
      // MuiPickersClockPointer:{
      //   pointer:{
      //     backgroundColor: CURRENT_THEME.main,
      //   },
    },
    MuiPickersClockNumber: {
      clockNumber: {
        color: CURRENT_THEME.textInv,
      },
      //   numberSelected: {
      //     backgroundColor: CURRENT_THEME.main, //calendar circle
      //   },
    },
    // MuiMuiPickersTime:{
    //   timeSelected: {
    //     backgroundColor: CURRENT_THEME.main, //calendar circle
    //   },
    // },
    // MuiPickersModal: {
    //   dialogAction: {
    //     color: CURRENT_THEME.main, //no se
    //     backgroundColor: CURRENT_THEME.el3,
    //   },
    // },

    MuiFormHelperText: {
      root: {
        color: CURRENT_THEME.error,
        "&$error": {
          color: CURRENT_THEME.error,
        },
      },
    },
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: "uppercase",
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontWeight: rawTheme.typography.fontWeightLight,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      fontFamily: "Nunito Sans, Roboto, sans-serif",
      lineHeight: 1.25,
      letterSpacing: "0.025em",
      fontWeight: 900,
      fontSize: 60,
      [rawTheme.breakpoints.down("sm")]: {
        fontSize: 32,
        fontWeight: 900,
      },
    },
    h2: {
      ...rawTheme.typography.h2,
      fontFamily: "Nunito Sans, Roboto, sans-serif",
      fontWeight: rawTheme.typography.fontWeightMedium,
      fontSize: 48,
      [rawTheme.breakpoints.down("sm")]: {
        fontSize: 36,
      },
    },
    h3: {
      ...rawTheme.typography.h3,
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      background: `linear-gradient(180deg,rgba(255,255,255,0) 50%, ${rawTheme.palette.primary.light} 50%)`,
      display: "inline",
      lignHeight: "35px",
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
      [rawTheme.breakpoints.down("sm")]: {
        fontSize: 20,
      },
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 15,
      letterSpacing: "0.1em",
      fontWeight: 700,
      textTransform: "uppercase",
      [rawTheme.breakpoints.down("sm")]: {
        fontSize: 15,
      },
    },
    subtitle2: {
      ...rawTheme.typography.subtitle2,
      fontSize: 20,
      [rawTheme.breakpoints.down("sm")]: {
        fontSize: 15,
      },
    },
    body1: {
      ...rawTheme.typography.body1,
      fontWeight: rawTheme.typography.fontWeightLight,
      fontSize: 18,
    },
    body2: {
      ...rawTheme.typography.body2,
      fontSize: 14,
      [rawTheme.breakpoints.down("sm")]: {
        fontSize: 12,
      },
    },
    button: {
      ...rawTheme.typography.button,
      fontSize: 12,
      [rawTheme.breakpoints.down("sm")]: {
        fontSize: 8,
      },
    },
  },
};

export default theme;
