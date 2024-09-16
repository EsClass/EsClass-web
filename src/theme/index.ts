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
      main: "#012970",
      contrastText: "#fff",
    },
  },
});
