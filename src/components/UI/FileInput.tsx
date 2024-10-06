import { FilePickerResult } from "@/types";
import { filePicker } from "@/utils/filePicker";
import { errorMessage, showMessage } from "@/utils/utility";
import { Add, FileOpen, PictureAsPdf } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonBase,
  GlobalStyles,
  Typography,
} from "@mui/material";
import { FC, useMemo, useState } from "react";

interface Props {
  helperText?: string;
  value?: string;
  error?: string;
  onChange: (file: FilePickerResult | null) => void;
  type?: "image" | "video";
  accept?: string;
  label?: string;
}

const styles = (
  <GlobalStyles
    styles={{
      ".picker-container": {
        borderRadius: 10,
        marginBottom: 5,
        padding: 15,
        border: "1px solid #ddd",
      },
    }}
  />
);

const FileInput: FC<Props> = ({
  helperText,
  value,
  label,
  type,
  error,
  accept,
  onChange,
}) => {
  const [pickerValue, setPickerValue] = useState<string | null>(null);
  const [contentType, setContentType] = useState<string>("");

  const imageHandler = async () => {
    try {
      const res = await filePicker({
        accept: accept,
        fileType: type,
      });
      const t = res.file.type;
      setContentType(t);
      console.log("got type", t);

      onChange(res);
      setPickerValue(res.uri);
    } catch (error) {
      showMessage({
        variant: "error",
        message: errorMessage(error),
      });
    }
  };

  const val = pickerValue || value;

  const mimeType = useMemo(() => {
    if (contentType === "application/pdf") return "pdf";
    else if (contentType.includes("image")) return "image";
    else if (contentType.includes("video")) return "video";
  }, [contentType]);

  return (
    <Box sx={{ width: "100%" }}>
      {styles}
      <Box width={"100%"} className="picker-container">
        {val ? (
          <Box className="flex-column">
            <Typography gutterBottom variant="body2" color="textSecondary">
              {label}
            </Typography>
            {mimeType === "image" ? (
              <img
                src={val}
                style={{
                  display: "block",
                  margin: "20px 0",
                  height: 200,
                  width: "90%",
                  objectFit: "contain",
                }}
              />
            ) : mimeType === "pdf" ? (
              <Box
                height={120}
                width={120}
                my={4}
                className="flex-column"
                justifyContent={"center"}
                bgcolor={"var(--background)"}
                borderRadius={"50%"}
              >
                <PictureAsPdf color="primary" sx={{ fontSize: 56 }} />
              </Box>
            ) : (
              <video
                src={val}
                controls
                style={{
                  display: "block",
                  margin: "20px 0",
                  background: "#222",
                  height: 200,
                  width: "90%",
                  objectFit: "contain",
                }}
              />
            )}

            <Button
              color="primary"
              startIcon={<Add />}
              onClick={imageHandler}
              style={{ textTransform: "capitalize" }}
            >
              Change {type}
            </Button>
          </Box>
        ) : (
          <ButtonBase onClick={imageHandler} sx={{ width: "100%" }}>
            <Box className="flex-column" padding="40px 0">
              <Box
                height={120}
                width={120}
                className="flex-column"
                justifyContent={"center"}
                bgcolor={"var(--background)"}
                borderRadius={"50%"}
              >
                <FileOpen sx={{ fontSize: 52 }} color="primary" />
              </Box>
              <Typography mt={2} color="primary">
                {label}
              </Typography>
            </Box>
          </ButtonBase>
        )}
      </Box>

      <Typography
        style={{ paddingLeft: 10 }}
        color="textSecondary"
        variant="body2"
      >
        {helperText}
      </Typography>
    </Box>
  );
};

export default FileInput;
