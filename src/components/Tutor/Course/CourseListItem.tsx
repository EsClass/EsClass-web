import { Course } from "@/types/data-types";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import moment from "moment";
import {
  CheckCircleOutline,
  Drafts,
  More,
  MoreVert,
} from "@mui/icons-material";
interface Props extends Course {}

const CourseListItem: FC<Props> = ({
  _id,
  category,
  status,
  createdAt,
  title,
}) => {
  return (
    <Box
      flexWrap={"wrap"}
      py={1.5}
      borderBottom={"1px solid #ddd"}
      className="flex"
    >
      <Box flex={1}>
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
        <Typography className="text">{category}</Typography>
      </Box>
      <Typography className="text" flex={1}>
        Created on {moment(createdAt).format("MMM DD, YYYY")}
      </Typography>

      <Box className="flex" flex={1}>
        {status === "Published" ? (
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
      </Box>

      <Button variant="outlined">View Details</Button>
      <IconButton sx={{ ml: 1 }}>
        <MoreVert />
      </IconButton>
    </Box>
  );
};

export default CourseListItem;
