import Button from "@/components/UI/Button";
import FileInput from "@/components/UI/FileInput";
import { addResource } from "@/redux/actions/course";
import { useAppDispatch } from "@/redux/store";
import { FilePickerResult } from "@/types";
import { resourceTypes } from "@/utils/constants";
import { uploadHelper } from "@/utils/uploadHelper";
import { errorMessage, showMessage } from "@/utils/utility";
import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  course: string;
  onSuccess: () => void;
}

const defaultForm = {
  title: "",
  description: "",
  type: "",
};

const AddNewResource: FC<Props> = ({ onClose, onSuccess, open, course }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultForm);
  const [picker, setPicker] = useState<FilePickerResult | null>(null);

  useEffect(() => {
    setFormData(defaultForm);
  }, [open]);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const url = await uploadHelper(picker?.file!, "resource");
      const d = {
        ...formData,
        course,
        url: url,
      };
      const res = await dispatch(addResource(d));
      if (res.success) {
        onClose();
        onSuccess();
      }
    } catch (error) {
      showMessage({
        variant: "error",
        message: errorMessage(error),
      });
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <Box
        p={{ xs: 2, md: 4 }}
        className="flex-column"
        alignItems={"flex-start"}
      >
        <IconButton size="large" sx={{ ml: "auto", background: "#eee" }}>
          <Close />
        </IconButton>

        <Typography fontWeight={600} variant="h5" mb={1}>
          Upload Resource
        </Typography>
        <Typography className="text" mb={3}>
          Upload course materials such as lecture notes, multimedia, or
          supplementary readings
        </Typography>

        <form style={{ width: "100%" }} onSubmit={submitHandler}>
          <TextField
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            label="Course Title"
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <TextField
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            multiline
            rows={6}
            label="Course Description"
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <TextField
            label="Resource Tye"
            fullWidth
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            required
            sx={{ mb: 4 }}
            select
          >
            {resourceTypes.map((cur) => (
              <MenuItem value={cur} key={cur}>
                {cur}
              </MenuItem>
            ))}
          </TextField>

          <FileInput
            accept="image/*,video/*,application/pdf"
            onChange={setPicker}
            label="Select File"
          />

          <Button type="submit" sx={{ mt: 4 }} fullWidth loading={loading}>
            Create Course
          </Button>
        </form>
      </Box>
    </Dialog>
  );
};
export default AddNewResource;
