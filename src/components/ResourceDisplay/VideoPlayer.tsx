import { Box, GlobalStyles } from "@mui/material";
import { FC } from "react";

interface Props {
  url: string;
}

const styles = (
  <GlobalStyles
    styles={{
      ".video-wrapper": {
        width: "100%",
        background: "#000",
        borderRadius: 20,
        overflow: "hidden",
      },
      ".video": {
        width: "100%",
        height: "auto",
        display: "block",
        minHeight: "20vh",
        maxHeight: "60vh",
      },
    }}
  />
);

const VideoPlayer: FC<Props> = ({ url }) => {
  return (
    <Box className="video-wrapper">
      {styles}
      <video src={url} className="video" controls controlsList="nodownload" />
    </Box>
  );
};
export default VideoPlayer;
