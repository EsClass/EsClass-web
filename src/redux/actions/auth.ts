import client from "@/api/client";
import { SignupTutorForm } from "@/types";
import { errorMessage, showMessage } from "@/utils/utility";
import {
  setAuthData,
  setAuthLoading,
  setLoggedIn,
  setToken,
} from "../slices/authSlices";
import { AppDispatch, persistor } from "../store";

const handleError = (error: any, dispatch: AppDispatch) => {
  dispatch(setAuthLoading(false));
  showMessage({
    variant: "error",
    message: errorMessage(error),
  });
  return {
    success: false,
    error: errorMessage(error),
  };
};

export const signup =
  (data: SignupTutorForm) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setAuthLoading(true));
      const res = (await client.post("user/create-account", data)).data;
      console.log("res", res);
      dispatch(setAuthLoading(false));
      dispatch(setAuthData(res.data));
      dispatch(setToken(res.token));
      dispatch(setLoggedIn(true));
      return {
        success: true,
      };
    } catch (error) {
      return { ...handleError(error, dispatch) };
    }
  };

export const login =
  (data: { email: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setAuthLoading(true));
      const res = await (await client.post("user/login", data)).data;

      dispatch(setLoggedIn(true));
      dispatch(setToken(res.token));
      dispatch(setAuthLoading(false));
      return {
        success: true,
        data: {
          role: res.role,
        },
      };
    } catch (error) {
      return { ...handleError(error, dispatch) };
    }
  };
export const getCurrentUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setAuthLoading(true));
    const res = await (await client.get("user")).data;
    dispatch(setAuthLoading(false));
    dispatch(setAuthData(res.data));
    return {
      success: true,
    };
  } catch (error) {
    return { ...handleError(error, dispatch) };
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  await persistor.purge();
};
