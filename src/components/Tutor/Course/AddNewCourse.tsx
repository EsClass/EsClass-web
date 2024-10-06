import Button from "@/components/UI/Button";
import { categories } from "@/utils/constants";
import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { FC } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const AddNewCourseModal: FC<Props> = ({ onClose, open }) => {
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
          Add New Course
        </Typography>
        <Typography className="text" mb={3}>
          Ensure that all the course details are accurate before submission.
        </Typography>

        <form>
          <TextField label="Course Title" fullWidth required sx={{ mb: 3 }} />
          <TextField
            multiline
            rows={6}
            label="Course Description"
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <TextField
            label="Choose a category"
            fullWidth
            required
            sx={{ mb: 4 }}
            select
          >
            {categories.map((cur) => (
              <MenuItem value={cur} key={cur}>
                {cur}
              </MenuItem>
            ))}
          </TextField>

          <Button fullWidth>Create Course</Button>
        </form>
      </Box>
    </Dialog>
  );
};
export default AddNewCourseModal;
