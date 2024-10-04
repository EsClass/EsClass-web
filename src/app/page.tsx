"use client";

import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import SearchBar from "@/components/Search/Searchbar";
import { Box, Button, GlobalStyles, Grid, Typography } from "@mui/material";
import Image from "next/image";

const styles = (
  <GlobalStyles
    styles={{
      ".header": {
        padding: 15,
        paddingBottom: 200,
        paddingTop: 120,
      },
    }}
  />
);

const HomePAge = () => {
  return (
    <>
      {styles}
      <Header watchScroll />
      <header className="header">
        <Box className="flex-column section-inner">
          <Typography
            className="header-text"
            maxWidth={600}
            align="center"
            sx={{ lineHeight: 1.2 }}
          >
            <span style={{ color: "var(--primary" }}>Empower</span> Learning
            with Expert-Curated Resources
          </Typography>
          <Box
            sx={{
              height: 4,
              background: "var(--primary)",
              width: {
                xs: 100,
                md: 230,
              },
              transform: "rotateZ(-2deg)",
              mr: 10,
            }}
          />
          <Typography
            className="text"
            mt={3}
            maxWidth={600}
            align="center"
            mb={4}
          >
            Access high-quality learning materials, assessments, and more from
            experienced tutors in your institution.
          </Typography>

          <SearchBar />
        </Box>
      </header>

      <section className="section" style={{ background: "var(--background)" }}>
        <Box className="section-inner">
          <Grid container spacing={{ xs: 3, lg: 12 }} alignItems={"center"}>
            <Grid item xs={12} md={6}>
              <Typography
                className="section-header-text"
                sx={{ lineHeight: 1.2 }}
                mb={3}
              >
                <span style={{ color: "var(--primary" }}>Unlock</span> Top
                Learning Resources & Practice Questions
              </Typography>
              <Typography className="text" mb={8}>
                "From study guides to practice questions with solutions, find
                everything you need to ace your exams and learn smarter. Access
                free and premium content created by top tutors."
              </Typography>
              <Button
                variant="contained"
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: 8,
                }}
              >
                Get Started For Free
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src={require("../../public/images/home1.png")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="section" id="tutor">
        <Box className="section-inner">
          <Grid container spacing={{ xs: 3, lg: 12 }} alignItems={"center"}>
            <Grid item xs={12} md={6}>
              <Image
                src={require("../../public/images/home2.png")}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className="header-text" sx={{ lineHeight: 1.2 }}>
                <span style={{ color: "var(--secondary" }}>Share </span>
                Your Knowledge with the World
              </Typography>
              <Box
                sx={{
                  height: 4,
                  background: "var(--secondary)",
                  width: {
                    xs: 100,
                    md: 170,
                  },
                  transform: "rotateZ(-2deg)",
                  ml: 20,
                }}
              />
              <Typography className="text" mb={8} mt={4}>
                Create and monetize your courses, resources, and tests with
                ease.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: 8,
                }}
              >
                Become a Tutor
              </Button>
            </Grid>
          </Grid>
        </Box>
      </section>
      <Footer />
    </>
  );
};
export default HomePAge;
