import Button from "@/components/UI/Button";
import { addCourse } from "@/redux/actions/course";
import { useAppDispatch, useAppSelector } from "@/redux/store";
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
import { FC, useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const defaultForm = {
  title: "",
  description: "",
  category: "",
};

const AddNewCourseModal: FC<Props> = ({ onClose, open }) => {
  const dispatch = useAppDispatch();
  const course = useAppSelector((s) => s.course);
  const [formData, setFormData] = useState(defaultForm);

  useEffect(() => {
    setFormData(defaultForm);
  }, [open]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const d = {
      ...formData,
      category: [formData.category],
    };
    const res = await dispatch(addCourse(d));

    if (res.success) onClose();
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
          Add New Course
        </Typography>
        <Typography className="text" mb={3}>
          Ensure that all the course details are accurate before submission.
        </Typography>

        <form onSubmit={submitHandler}>
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
            label="Choose a category"
            fullWidth
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
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

          <Button type="submit" fullWidth loading={course.loading}>
            Create Course
          </Button>
        </form>
      </Box>
    </Dialog>
  );
};
export default AddNewCourseModal;
