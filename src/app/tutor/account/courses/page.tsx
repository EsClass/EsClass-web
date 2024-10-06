"use client";

import EmptyComp from "@/components/EmptyComp";
import MainLayout from "@/components/navs/MainLayout";
import AddNewCourseModal from "@/components/Tutor/Course/AddNewCourse";
import CourseListItem from "@/components/Tutor/Course/CourseListItem";
import { getCoerces } from "@/redux/actions/course";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { School } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const CoursePage = () => {
  const courses = useAppSelector((s) => s.course);
  const dispatch = useAppDispatch();
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    dispatch(getCoerces());
  }, []);

  return (
    <MainLayout loading={courses.loading} icon={<School />} title="Courses">
      <Box mb={6} className="flex">
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

      {courses.data?.length === 0 && <EmptyComp />}
      {courses.data?.map((cur) => (
        <CourseListItem {...cur} key={cur._id} />
      ))}

      <AddNewCourseModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </MainLayout>
  );
};

export default CoursePage;
