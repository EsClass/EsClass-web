import { Course, Tutor } from "@/types/data-types";
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface State {
  loading: boolean;
  data: Course[] | null;
}

const initialState: State = {
  loading: false,
  data: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourseLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setCourses: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState); // THIS LINE
  },
});

export const { setCourseLoading, setCourses } = courseSlice.actions;
export default courseSlice.reducer;
