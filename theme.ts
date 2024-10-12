"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff4081", // a playful pink
    },
    secondary: {
      main: "#7c4dff", // a quirky purple
    },
    background: {
      default: "#f7f6f3", // a soft off-white
      paper: "#ffe0b2", // a light peach
    },
    text: {
      primary: "#3e2723", // a deep brown
      secondary: "#5d4037", // a lighter brown
    },
  },
  typography: {
    fontFamily: '"Comic Neue", cursive',
    h1: {
      fontSize: "2.2rem",
      fontWeight: 700,
      letterSpacing: "0.00735em",
      color: "#004d40", // teal
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0.00938em",
      color: "#1a237e", // indigo
    },
  },
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
});

export default theme;
