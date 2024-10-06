"use client";

import EmptyComp from "@/components/EmptyComp";
import MainLayout from "@/components/navs/MainLayout";
import AddNewCourseModal from "@/components/Tutor/Course/AddNewCourse";
import { School } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const CoursePage = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <MainLayout icon={<School />} title="Courses">
      <Box className="flex">
        <Box flex={1}>
          <Typography variant="h6">Manage Your Courses</Typography>
          <Typography className="text">
            Manage your course content, questions, and CBT tests.
          </Typography>
        </Box>
        <Button
          onClick={() => setShowAddModal(true)}
          variant="contained"
          sx={{ py: 1.3, px: 3, borderRadius: 2 }}
        >
          Add New Course
        </Button>
      </Box>

      <EmptyComp />

      <AddNewCourseModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </MainLayout>
  );
};

export default CoursePage;
