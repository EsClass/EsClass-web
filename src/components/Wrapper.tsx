"use client";

import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";

function Wrapper({ children, isResident }: any) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider />
      {children}
    </ThemeProvider>
  );
}
export default Wrapper;
