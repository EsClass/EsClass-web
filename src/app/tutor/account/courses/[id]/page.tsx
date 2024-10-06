"use client";

import MainLayout from "@/components/navs/MainLayout";
import Resources from "@/components/Tutor/Course/Resources";
import { getSingleCourse } from "@/redux/actions/course";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Course } from "@/types/data-types";
import {
  ArrowBack,
  CheckCircleOutline,
  Drafts,
  School,
} from "@mui/icons-material";
import { Box, Button, ButtonBase, Tab, Tabs, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

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

const CoursePage = ({ params }: any) => {
  const courses = useAppSelector((s) => s.course);
  const [data, setData] = useState<Course>();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [showEdit, setShowEdit] = useState(false);

  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

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
          sx={{ mr: 2, py: 1.3, px: 3, borderRadius: 2 }}
        >
          Edit Course Info
        </Button>

        <ButtonBase>
          {data?.status === "Published" ? (
            <>
              <CheckCircleOutline color="success" sx={{ mr: 1 }} />
              <Typography>Published</Typography>
            </>
          ) : (
            <>
              <Drafts sx={{ color: "#aaa", mr: 1 }} />
              <Typography>Draft</Typography>
            </>
          )}
        </ButtonBase>
      </Box>

      <Typography mb={1}>Description</Typography>
      <Typography className="text">{data?.description}</Typography>

      <Box mt={8} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Resources" {...a11yProps(0)} />
          <Tab label="Questions with solutions" {...a11yProps(1)} />
          <Tab label="Assessments" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tab} index={0}>
        <Resources course={params.id} />
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={1}>
        Questions with solutions
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={2}>
        Assessments
      </CustomTabPanel>
    </MainLayout>
  );
};

export default CoursePage;
