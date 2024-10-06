import { Tutor } from "@/types/data-types";
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface AuthState {
  loading: boolean;
  openDrawer: boolean;
  loggedIn: boolean;
  token?: string;
  data: Tutor | null;
}

const initialState: AuthState = {
  loading: false,
  loggedIn: false,
  data: null,
  openDrawer: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setAuthData: (state, { payload }) => {
      state.data = payload;
    },
    setLoggedIn: (state, { payload }) => {
      state.loggedIn = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
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
  setLoggedIn,
  setAuthLoading,
  setAuthData,
  toggleDrawer,
  setToken,
} = authSlice.actions;
export default authSlice.reducer;
