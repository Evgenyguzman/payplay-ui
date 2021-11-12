import { createTheme } from "@mui/material";
import Regular from "assets/fonts/gilroy/gilroy-regular.ttf";
import Medium from "assets/fonts/gilroy/gilroy-medium.ttf";
import SemiBold from "assets/fonts/gilroy/gilroy-semibold.ttf";
import Bold from "assets/fonts/gilroy/gilroy-bold.ttf";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6C5ECF",
      light: "#383164",
      dark: "#26204A",
    },
    secondary: {
      main: "#ABB2CB",
    },
    text: {
      primary: "#FFF",
      secondary: "#ABB2CB",
    },
    info: {
      main: "#221F31",
    },
  },
  typography: {
    fontFamily: "Gilroy, Arial",
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {
      fontSize: 10,
    },
    body1: {
      fontSize: 16,
      fontWeight: 500,
    },
    h1: {
      fontSize: 36,
      textTransform: "uppercase",
      fontWeight: 600,
    },
    h2: {
      fontSize: 34,
      textTransform: "uppercase",
    },
    h3: {
      fontSize: 32,
      textTransform: "uppercase",
    },
    h4: {
      fontSize: 24,
      textTransform: "uppercase",
    },
    h5: {
      fontSize: 20,
      textTransform: "uppercase",
    },
    h6: {
      fontSize: 18,
      textTransform: "uppercase",
    },
    button: {
      fontStyle: "italic",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Gilroy';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Gilroy'), local('Gilroy-Regular'), url(${Regular}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Gilroy';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Gilroy'), local('Gilroy-Medium'), url(${Medium}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Gilroy';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Gilroy'), local('Gilroy-SemiBold'), url(${SemiBold}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Gilroy';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Gilroy'), local('Gilroy-Bold'), url(${Bold}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

export default theme;
