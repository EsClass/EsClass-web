import EmptyComp from "@/components/EmptyComp";
import Spinner from "@/components/UI/Spinner";
import { getQuestions, getResources } from "@/redux/actions/course";
import { Question } from "@/types/data-types";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import QuestionListItem from "./QuestionListItem";

interface Props {
  course: string;
}

const Questions: FC<Props> = ({ course }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Question[]>([]);

  const loadData = async () => {
    setLoading(true);
    const res = await getQuestions(course!);
    if (res.success) setData(res.data);
    setLoading(false);
  };
  useEffect(() => {
    if (course) loadData();
  }, [course]);

  return (
    <>
      <Box className="flex" mb={4}>
        <Typography variant="h6" fontWeight={500} flex={1}>
          Practice Questions
        </Typography>
        <Link href={"/tutor/account/courses/" + course + "/add-question"}>
          <Button variant="outlined">Add Question</Button>
        </Link>
      </Box>

      {data.map((cur) => (
        <QuestionListItem {...cur} key={cur._id} />
      ))}
      {loading && <Spinner />}
      {data.length === 0 && !loading && <EmptyComp />}
    </>
  );
};

export default Questions;
