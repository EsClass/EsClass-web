"use client";

import { ResourceFull } from "@/types/data-types";
import { Avatar, Box, Button, Typography } from "@mui/material";
import moment from "moment";
import { FC } from "react";
import VideoPlayer from "./VideoPlayer";

interface Props {
  data: ResourceFull;
}

const ResourceScreen: FC<Props> = ({ data }) => {
  console.log("d", data);

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

      <Box className="flex" pb={4}>
        <Typography flex={1} pr={2} variant="h5">
          <span
            style={{
              color: "var(--secondary)",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            {data.type}:
          </span>{" "}
          {data.title}
        </Typography>

        {data.type === "File" && (
          <Button href={data.url} target="_blank" variant="contained">
            Open Document
          </Button>
        )}
      </Box>

      {data.type === "Video" && <VideoPlayer url={data.url} />}

      <Box
        className="flex"
        mt={3}
        mb={8}
        pb={4}
        borderBottom={"1px solid #ddd"}
      >
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

        <Typography color="text">{moment(data.createdAt).fromNow()}</Typography>
      </Box>

      <Typography variant="body1">{data.description}</Typography>
    </Box>
  );
};

export default ResourceScreen;
