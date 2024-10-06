"use client";

import MainLayout from "@/components/navs/MainLayout";
import { getCoerces, getSingleCourse } from "@/redux/actions/course";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Course } from "@/types/data-types";
import { ArrowBack, School } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const CoursePage = ({ params }: any) => {
  const courses = useAppSelector((s) => s.course);
  const [data, setData] = useState<Course>();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [showEdit, setShowEdit] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const res = await getSingleCourse(params.id);
    if (res.success) setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <MainLayout loading={loading} icon={<School />} title="Courses Details">
      <Link
        href="/tutor/account/courses"
        style={{ color: "var(--primary)" }}
        className="flex"
      >
        <ArrowBack sx={{ mr: 1 }} />
        Back to My Courses
      </Link>

      <Box mt={2} mb={6} className="flex">
        <Box flex={1}>
          <Typography mb={0.5} variant="h5" fontWeight={600}>
            {data?.title}
          </Typography>
          <Typography className="text">
            <span style={{ fontWeight: 500 }}>Category: </span> {data?.category}
          </Typography>
        </Box>
        <Button
          onClick={() => setShowEdit(true)}
          variant="outlined"
          sx={{ py: 1.3, px: 3, borderRadius: 2 }}
        >
          Edit Course Info
        </Button>
      </Box>

      <Typography mb={1}>Description</Typography>
      <Typography className="text">{data?.description}</Typography>
    </MainLayout>
  );
};

export default CoursePage;
