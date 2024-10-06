"use client";

import MainLayout from "@/components/navs/MainLayout";
import { useAppSelector } from "@/redux/store";
import { currencyFormatter } from "@/utils/utility";
import { Dashboard } from "@mui/icons-material";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const TutorDashboardPage = () => {
  const auth = useAppSelector((s) => s.auth);

  return (
    <MainLayout loading={auth.loading} icon={<Dashboard />} title="Dashboard">
      <Box mb={6} className="flex">
        <Avatar sx={{ height: 84, width: 84 }} />
        <Box flex={1} ml={2}>
          <Typography variant="h6" sx={{}}>
            Hello {auth.data?.name}, Ready to inspire and share knowledge today?
          </Typography>
          <Typography className="text">
            Manage your courses, and grow your earnings.
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Box bgcolor={"#F7F7F7"} p={3} borderRadius={4} className="flex">
            <Box flex={1}>
              <Typography mb={1} fontWeight={200}>
                Your Courses
              </Typography>
              <Typography mb={4} variant="h4">
                0
              </Typography>
              <Link style={{ color: "var(--primary)" }} href="/">
                View Courses
              </Link>
            </Box>
            <Image
              style={{ width: 120, height: 120, objectFit: "contain" }}
              src={require("../../../../public/images/courses.png")}
              alt=""
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box bgcolor={"#F7F7F7"} p={3} borderRadius={4} className="flex">
            <Box flex={1}>
              <Typography mb={1} fontWeight={200}>
                Earnings
              </Typography>
              <Typography mb={4} variant="h4">
                {currencyFormatter(auth.data?.earnings)}
              </Typography>
              <Link style={{ color: "var(--secondary)" }} href="/">
                View Details
              </Link>
            </Box>
            <Image
              style={{ width: 120, height: 120, objectFit: "contain" }}
              src={require("../../../../public/images/earnings.png")}
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default TutorDashboardPage;
