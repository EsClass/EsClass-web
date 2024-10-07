"use client";
import MainLayout from "@/components/navs/MainLayout";
import Button from "@/components/UI/Button";
import CustomEditor from "@/components/UI/Editor";
import CustomEditor2 from "@/components/UI/QuillEditor";
import { addQuestion } from "@/redux/actions/course";
import { useAppDispatch } from "@/redux/store";
import { Difficulty, QuestionType } from "@/types";
import { difficulties } from "@/utils/constants";
import { ArrowBack, School } from "@mui/icons-material";
import {
  Box,
  Grid,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const defaultForm = {
  question: "",
  solution: "",
  difficultyLevel: "",
  type: "",
  isMonetized: false,
};

const AddQuestion = ({ params }: any) => {
  const router = useRouter();
  const [formData, setFormData] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const submitHandler = async () => {
    setLoading(true);
    const d = {
      ...formData,
      difficultyLevel: formData.difficultyLevel as Difficulty,
      questionType: "Descriptive" as QuestionType,
      course: params.id,
    };
    const res = await dispatch(addQuestion(d));
    if (res.success) {
      router.push("/tutor/account/courses/" + params.id);
    }
    setLoading(false);
  };

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
      {/* <Grid container alignItems={"center"}>
          <Grid item xs={12} md={2}>
            <Typography className="text">Question Type</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField select fullWidth label="Select Question Type" />
          </Grid>
        </Grid>
        <Box mb={6} /> */}
      <Grid container alignItems={"center"}>
        <Grid item xs={12} md={2}>
          <Typography className="text">Difficulty Level</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={formData.difficultyLevel}
            onChange={(e) =>
              setFormData({ ...formData, difficultyLevel: e.target.value })
            }
            select
            fullWidth
            label="Select Difficulty"
          >
            {difficulties.map((cur) => (
              <MenuItem value={cur} key={cur}>
                {cur}
              </MenuItem>
            ))}
          </TextField>
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

            <Switch
              checked={formData.isMonetized}
              onChange={(e) =>
                setFormData({ ...formData, isMonetized: e.target.checked })
              }
              sx={{ transform: "scale(1.2)" }}
            />
          </Box>
        </Grid>
      </Grid>

      <Typography mt={6} mb={3}>
        Question One
      </Typography>
      <CustomEditor
        value={formData.question}
        onChange={(val) => setFormData({ ...formData, question: val })}
      />
      <Typography mt={6} mb={3}>
        Solution
      </Typography>
      <CustomEditor
        value={formData.solution}
        onChange={(val) => setFormData({ ...formData, solution: val })}
      />

      <Button
        disabled={!formData.question || !formData.solution}
        onClick={submitHandler}
        sx={{ mt: 6, mb: 10 }}
      >
        Add Question
      </Button>
    </MainLayout>
  );
};

export default AddQuestion;
