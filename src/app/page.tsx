"use client";

import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
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
  useEffect(() => { }, []);

  return <div className="root">
    <Hero />
    
    {styles}

    
  </div>;
}
