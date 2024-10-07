"use client";
import MainLayout from "@/components/navs/MainLayout";
import { ArrowBack, Scale, School } from "@mui/icons-material";
import { Box, Grid, Switch, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const AddQuestion = ({ params }: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <MainLayout loading={loading} icon={<School />} title="Add a Question">
      <Link
        href={"/tutor/account/courses/" + params.id}
        style={{ color: "var(--primary)" }}
        className="flex"
      >
        <ArrowBack sx={{ mr: 1 }} />
        Back to My Courses
      </Link>

      <Box mt={4} borderBottom={"1px solid #ddd"} pb={2} mb={8}>
        <Typography mb={0.5} variant="h5" fontWeight={600}>
          Add a question
        </Typography>
        <Typography className="text">
          Create and upload a new question with its solution for students to
          practice.
        </Typography>
      </Box>

      <Grid container alignItems={"center"}>
        <Grid item xs={12} md={2}>
          <Typography className="text">Question Type</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField select fullWidth label="Select Question Type" />
        </Grid>
      </Grid>
      <Box mb={6} />
      <Grid container alignItems={"center"}>
        <Grid item xs={12} md={2}>
          <Typography className="text">Difficulty Level</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField select fullWidth label="Select Difficulty" />
        </Grid>
      </Grid>
      <Box mb={6} />
      <Grid container alignItems={"center"}>
        <Grid item xs={12} md={2}>
          <Typography className="text">Access Type</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="flex">
            <Typography mr={3}>
              Turn on monetization for this question
            </Typography>

            <Switch sx={{ transform: "scale(1.2)" }} />
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default AddQuestion;
