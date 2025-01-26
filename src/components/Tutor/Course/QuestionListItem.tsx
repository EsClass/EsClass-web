import { Question } from "@/types/data-types";
import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import moment from "moment";
import { FC } from "react";
interface Props extends Question {}

const QuestionListItem: FC<Props> = ({
  _id,
  question,
  questionNumber,
  createdAt,
  isMonetized,
}) => {
  return (
    <Box flexWrap={"wrap"} p={2} mb={2} bgcolor={"#f7f7f7"}>
      <Box display="flex">
        <Typography
          mr={3}
          alignSelf={"flex-start"}
          color="secondary"
          variant="h6"
          fontWeight={600}
        >
          Q{questionNumber}
        </Typography>
        <Box flex={1}>
          <div dangerouslySetInnerHTML={{ __html: question }} />
        </Box>
        <IconButton sx={{ ml: 8 }}>
          <MoreVert />
        </IconButton>
      </Box>

      <Box className="flex" mt={3}>
        <Typography
          flex={1}
          color={isMonetized ? "secondary" : "primary"}
          fontWeight={500}
        >
          {isMonetized ? "Paid" : "Free"}
        </Typography>
        <Typography className="text" mr={4}>
          {moment(createdAt).fromNow(false)}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuestionListItem;
