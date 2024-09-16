"use client";

import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import MainNav from "./navs/MainNav";

function Wrapper({ children, isResident }: any) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider />
      <MainNav>{children}</MainNav>
    </ThemeProvider>
  );
}
export default Wrapper;
