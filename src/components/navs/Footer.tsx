import { variables } from "@/utils/constants";
import {
  Call,
  Facebook,
  Instagram,
  LocationOn,
  Mail,
} from "@mui/icons-material";
import { Box, GlobalStyles, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const styles = (
  <GlobalStyles
    styles={{
      ".footer": {
        background: "var(--background2)",
        padding: "120px 15px",
        borderTop: "1px solid #ddd",

        ".footLink": {
          display: "block",
          fontWeight: 200,
          marginBottom: 20,
          color: "#555",
        },

        "a:hover": {
          color: "var(--primary)",
        },
      },
    }}
  />
);

function Footer() {
  return (
    <>
      {styles}
      <footer className="footer">
        <div className="section-inner ">
          <Grid
            container
            spacing={{
              lg: 10,
              xs: 5,
            }}
          >
            <Grid item xs={12} md={4} display={"flex"}>
              <Box mx="auto">
                <Typography variant="h6" mb={4}>
                  Quick Links
                </Typography>

                <Link className="footLink" href="/">
                  Home
                </Link>
                <Link className="footLink" href="/">
                  About Us
                </Link>
                <Link className="footLink" href="/">
                  Testimonials
                </Link>
                <Link className="footLink" href="/">
                  Our Services
                </Link>
                <Link className="footLink" href="/">
                  Contact Us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} display="flex">
              <Box mx="auto">
                <Typography variant="h6" mb={4}>
                  Reach Us
                </Typography>
                <Box display={"flex"} mb={2}>
                  <Call />
                  <Typography fontWeight={200} ml={2}>
                    {variables.phone}
                  </Typography>
                </Box>
                <Box display={"flex"} mb={2}>
                  <Mail />
                  <Typography fontWeight={200} ml={2}>
                    {variables.email}
                  </Typography>
                </Box>
                <Box display={"flex"}>
                  <LocationOn />
                  <Typography fontWeight={200} ml={2}>
                    {variables.address}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} display="flex">
              <Box mx="auto">
                <Typography className="text" mb={1}>
                  © Copyright 2024 All rights reserved.
                </Typography>
                <Image
                  style={{ height: 30, width: "auto" }}
                  src={require("../../../public/images/logo.png")}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </div>
      </footer>
    </>
  );
}
export default Footer;
