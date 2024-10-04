import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
  palette: {
    primary: {
      main: "#00cb4b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#8f3be4",
      contrastText: "#fff",
    },
  },
});
