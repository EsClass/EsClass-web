import { Course } from "@/types/data-types";
import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface Props extends Course {}

const CourseListItem: FC<Props> = ({ _id, category, createdAt, title }) => {
  return (
    <Box>
      <Typography>{title}</Typography>
    </Box>
  );
};

export default CourseListItem;
