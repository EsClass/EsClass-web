"use client";
import client from "@/api/client";
import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import AllSearchResult from "@/components/Search/AllSearchResult";
import SearchBar from "@/components/Search/Searchbar";
import { errorMessage, showMessage } from "@/utils/utility";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";

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

const SearchPage = ({ params }: any) => {
  const [tab, setTab] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const [loading, setLoading] = useState(false);
  const [resources, setResources] = useState<any[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = (await client.get("search?keyword=" + params.search)).data;
      setResources(res.resources);
      setQuestions(res.questions);
      console.log("res", res);
    } catch (error) {
      showMessage({
        variant: "error",
        message: errorMessage(error),
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (params.search) loadData();
  }, [params.search]);

  return (
    <>
      <Header />
      <section className="section" style={{ paddingTop: 20 }}>
        <Box className="section-inner">
          <SearchBar search={params.search} />
          <Box maxWidth={900}>
            <Box mt={4} sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={tab}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="Questions with solutions" {...a11yProps(1)} />
                <Tab label="Resources" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={tab} index={0}>
              <AllSearchResult
                loading={loading}
                questions={questions}
                resources={resources}
              />
            </CustomTabPanel>
            <CustomTabPanel value={tab} index={1}>
              <AllSearchResult
                loading={loading}
                questions={questions}
                resources={resources}
                mode="question"
              />
            </CustomTabPanel>
            <CustomTabPanel value={tab} index={2}>
              <AllSearchResult
                loading={loading}
                questions={questions}
                resources={resources}
                mode="resource"
              />
            </CustomTabPanel>
          </Box>
        </Box>
      </section>

      <Footer />
    </>
  );
};

export default SearchPage;
