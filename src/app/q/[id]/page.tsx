"use client";
import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import AllSearchResult from "@/components/Search/AllSearchResult";
import SearchBar from "@/components/Search/Searchbar";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    sx: {
      textTransform: "capitalize",
      px: 4,
    },
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const QuestionResultPage = ({ params }: any) => {
  const [tab, setTab] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: 20 }}>
        <Box className="section-inner">
          <SearchBar search={params.search} />
        </Box>
      </section>

      <Footer />
    </>
  );
};

export default QuestionResultPage;
