"use client";

import { Question, QuestionFull } from "@/types/data-types";
import { Avatar, Box, Typography } from "@mui/material";
import moment from "moment";
import { FC } from "react";
import CheckCircle from "../../../public/icons/CheckCircle.svg";

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

      <Box className="flex" mt={3} mb={8}>
        <Avatar
          alt={data.tutor.name}
          sx={{ background: "var(--primary)", mr: 1, height: 48, width: 48 }}
          src={"https://28474.com/img.png"}
        />
        <Box flex={1}>
          <Typography fontWeight={700} textTransform={"capitalize"}>
            {data.tutor.name}
          </Typography>
          <Typography variant="body2" className="text">
            Tutor
          </Typography>
        </Box>
        <Typography mr={1} color={data.isMonetized ? "secondary" : "primary"}>
          {data.isMonetized ? "Paid" : "Free"}
        </Typography>
        <Typography color="text">{moment(data.createdAt).fromNow()}</Typography>
      </Box>

      {/* Solution */}
      <Box
        className="flex"
        sx={{
          background: "var(--background)",
          px: 2,
          py: 2,
          mb: 6,
          borderRadius: 4,
        }}
      >
        <CheckCircle />
        <Typography fontWeight={700} ml={1}>
          Solution
        </Typography>
      </Box>
      <Typography variant="body1" pb={4} borderBottom={"1px solid #ddd"}>
        <p dangerouslySetInnerHTML={{ __html: data.solution }} />
      </Typography>
    </Box>
  );
};

export default QuestionScreen;
