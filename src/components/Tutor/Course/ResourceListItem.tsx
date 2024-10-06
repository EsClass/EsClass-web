import { Resource } from "@/types/data-types";
import {
  CheckCircleOutline,
  Drafts,
  FilePresentOutlined,
  MoreVert,
  OpenInNew,
  VideoCall,
  Videocam,
} from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import { FC } from "react";
interface Props extends Resource {}

const ResourceListItem: FC<Props> = ({
  _id,
  description,
  type,
  url,
  createdAt,
  title,
}) => {
  return (
    <Box
      flexWrap={"wrap"}
      py={1}
      borderBottom={"1px solid #ddd"}
      className="flex"
    >
      {type === "File" ? (
        <FilePresentOutlined color="secondary" />
      ) : (
        <Videocam color="primary" />
      )}
      <Typography ml={1} flex={1}>
        {title}
      </Typography>

      <Typography className="text" mr={4}>
        {type}
      </Typography>
      <Typography className="text" mr={4}>
        {moment(createdAt).fromNow(false)}
      </Typography>

      <a target="_blank" href={url}>
        <IconButton color="primary">
          <OpenInNew />
        </IconButton>
      </a>
      <IconButton sx={{ ml: 8 }}>
        <MoreVert />
      </IconButton>
    </Box>
  );
};

export default ResourceListItem;
