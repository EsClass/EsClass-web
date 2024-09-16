"use client";

import { GlobalStyles } from "@mui/material";
import { useEffect } from "react";

const styles = (
  <GlobalStyles
    styles={{
      ".root": {},
    }}
  />
);

export default function Home() {
  useEffect(() => {}, []);

  return <div className="root">{styles}</div>;
}
