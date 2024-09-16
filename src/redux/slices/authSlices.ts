import { Student, Supervisor } from "@/types/data-types";
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface AuthState {
  loading: boolean;
  openDrawer: boolean;
  loggedIn: boolean;
  data: Supervisor | Student | null;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  loggedIn: false,
  data: null,
  openDrawer: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLoading: (state, { payload }) => {
      state.loading = payload;
      state.error = null;
    },
    setAuthError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    setAuthData: (state, { payload }) => {
      state.data = payload;
    },
    setLoggedIn: (state, { payload }) => {
      state.loggedIn = payload;
    },
    toggleDrawer: (state) => {
      state.openDrawer = !state.openDrawer;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState); // THIS LINE
  },
});

export const {
  setAuthError,
  setLoggedIn,
  setAuthLoading,
  setAuthData,
  toggleDrawer,
} = authSlice.actions;
export default authSlice.reducer;
