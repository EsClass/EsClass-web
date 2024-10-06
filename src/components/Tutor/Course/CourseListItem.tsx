import { Course } from "@/types/data-types";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import moment from "moment";
interface Props extends Course {}

const CourseListItem: FC<Props> = ({ _id, category, createdAt, title }) => {
  return (
    <Box py={1.5} borderBottom={"1px solid #ddd"} className="flex">
      <Box>
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
        <Typography className="text">{category}</Typography>
      </Box>
      <Typography className="text">
        {" "}
        Created on {moment(createdAt).format("MMM DD, YYYY")}
      </Typography>
    </Box>
  );
};

export default CourseListItem;
