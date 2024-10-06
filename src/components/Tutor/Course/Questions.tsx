import EmptyComp from "@/components/EmptyComp";
import Spinner from "@/components/UI/Spinner";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { FC, useState } from "react";

interface Props {
  course: string;
}

const Questions: FC<Props> = ({ course }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

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

      {loading && <Spinner />}
      {data.length === 0 && !loading && <EmptyComp />}
    </>
  );
};

export default Questions;
