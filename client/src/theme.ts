import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212429",
    },
    secondary: {
      main: "#a87ede",
    },
    text: {
      primary: "#ffffff",
      secondary: "#443952",
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 18
  },
});

export default theme;
