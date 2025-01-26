import { Course, Tutor } from "@/types/data-types";
import { htmlToText } from "@/utils/utility";
import { Box, Typography } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import { FC } from "react";

interface RProps {
  title: string;
  description: "This is the description";
  type: "File" | "Video";
  url: string;
  tutor: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  course: Course;
}
interface QProps {
  createdAt: string;
  difficultyLevel: string;
  isMonetized: boolean;
  question: string;
  questionNumber: number;
  questionType: number;
  solution: string;
  tutor: Tutor;
  _id: string;
  course: Course;
}

const ResultResource: FC<RProps> = ({
  _id,
  type,
  course,
  createdAt,
  description,
  title,
}) => {
  return (
    <Box py={2} borderBottom={"1px solid #ddd"}>
      <Box mb={1} className="flex">
        <Typography
          fontWeight={600}
          mr={1}
          textTransform={"uppercase"}
          color="secondary"
        >
          {type}
        </Typography>
        <Typography fontWeight={600}>{title}</Typography>
      </Box>
      <Typography className="text" variant="body2">
        {description.substring(0, 300)}..
      </Typography>

      <Box className="flex" mt={2}>
        <Box flex={1} className="flex">
          <Typography className="text">{course.category} / </Typography>
          <Typography color="primary" ml={1}>
            {" "}
            {course.title}
          </Typography>
        </Box>
        <Typography color="text">{moment(createdAt).fromNow()}</Typography>
      </Box>
    </Box>
  );
};

export const ResultQuestion: FC<QProps> = ({
  createdAt,
  isMonetized,
  question,
  _id,
  course,
}) => {
  return (
    <Box py={2} borderBottom={"1px solid #ddd"}>
      <Box mb={1} className="flex">
        <Link href={"/q/" + _id}>
          <Typography>
            <span style={{ fontWeight: 700 }}>Q:</span> {htmlToText(question)}
          </Typography>
        </Link>
      </Box>

      <Box className="flex" mt={2}>
        <Box flex={1} className="flex">
          <Typography className="text">{course.category} / </Typography>
          <Typography color="primary" ml={1}>
            {" "}
            {course.title}
          </Typography>
        </Box>
        <Typography mr={1} color={isMonetized ? "secondary" : "primary"}>
          {isMonetized ? "Paid" : "Free"}
        </Typography>
        <Typography color="text">{moment(createdAt).fromNow()}</Typography>
      </Box>
    </Box>
  );
};

export default ResultResource;
