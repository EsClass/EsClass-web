"use client";

import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import { Role } from "@/types/data-types";
import { roles } from "@/utils/constants";
import { Box, Button, ButtonBase, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const GetStarted = () => {
  const [role, setRole] = useState<string>("Student");

  return (
    <>
      <Header />
      <section className="section">
        <Box className="section-inner  flex-column  ">
          <Typography align="center" className="section-header-text">
            Select Your <span style={{ color: "var(--primary)" }}>Role</span>
          </Typography>
          <Typography align="center" className="text" mb={8}>
            Whether you're an institution administrator, a lecturer, or a
            student, we've got the tools you need to succeed.{" "}
          </Typography>
          <Box width={"100%"} maxWidth={800}>
            <Grid container spacing={{ xs: 2, lg: 4 }}>
              {roles.map((cur) => (
                <Grid item xs={12} md={6} key={cur.title}>
                  <ButtonBase
                    onClick={() => setRole(cur.title)}
                    sx={{
                      height: "100%",
                      textAlign: "left",
                    }}
                  >
                    <Box
                      height={"100%"}
                      sx={{
                        px: {
                          xs: 2,
                          md: 4,
                        },
                        py: {
                          xs: 2,
                          md: 4,
                        },
                      }}
                      borderRadius={10}
                      border={
                        cur.title === role
                          ? "2px solid var(--primary)"
                          : "1px solid #ccc"
                      }
                    >
                      <Image
                        src={cur.icon}
                        alt=""
                        style={{
                          height: 150,
                          width: 150,
                          objectFit: "contain",
                        }}
                      />
                      <Typography fontWeight={600} variant="h5">
                        {cur.title}
                      </Typography>
                      {cur.list.map((cur) => (
                        <Box key={cur} className="flex" mt={0.5}>
                          <Box
                            height={10}
                            mr={1}
                            width={10}
                            borderRadius={"50%"}
                            bgcolor={"var(--primary)"}
                          />
                          <Typography className="text">{cur}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </ButtonBase>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Link href={roles.find((item) => item.title === role)?.route!}>
            <Button
              variant="contained"
              sx={{
                mt: 10,
                borderRadius: 10,
                px: 6,
                py: 1.5,
              }}
            >
              Continue
            </Button>
          </Link>
        </Box>
      </section>
      <Footer />?
    </>
  );
};

export default GetStarted;
