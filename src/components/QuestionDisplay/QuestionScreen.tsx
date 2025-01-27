"use client";

import { Question, QuestionFull } from "@/types/data-types";
import { Avatar, Box, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  data: QuestionFull;
}

const QuestionScreen: FC<Props> = ({ data }) => {
  return (
    <Box maxWidth={900}>
      <Box className="flex" py={4}>
        <Typography className="text" mr={1}>
          {data.course.category}
        </Typography>
        /
        <Typography color="primary" ml={1}>
          {data.course.title}
        </Typography>
      </Box>

      <Typography variant="h5" pb={4} borderBottom={"1px solid #ddd"}>
        <span style={{ fontWeight: 700 }}>Q{data.questionNumber}</span>
        <p dangerouslySetInnerHTML={{ __html: data.question }} />
      </Typography>

      <Box className="flex">
        <Avatar
          alt={data.tutor.name}
          sx={{ background: "var(--primary)", height: 48, width: 48 }}
          src={"https://28474.com/img.png"}
        />
        <Box>
          <Typography fontWeight={700} textTransform={"capitalize"}>
            {data.tutor.name}
          </Typography>
          <Typography variant="body2" className="text">
            Tutor
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionScreen;
