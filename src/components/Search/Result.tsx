import { Course, Resource } from "@/types/data-types";
import { Box, Typography } from "@mui/material";
import moment from "moment";
import { FC, useMemo } from "react";

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
      <Typography className="text">
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

export default ResultResource;
