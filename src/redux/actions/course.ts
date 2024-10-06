import client from "@/api/client";
import { AddCourseForm } from "@/types";
import { errorMessage, showMessage } from "@/utils/utility";
import { setCourseLoading, setCourses } from "../slices/courseSlices";
import { AppDispatch } from "../store";

const handleError = (error: any, dispatch: AppDispatch) => {
  dispatch(setCourseLoading(false));
  showMessage({
    variant: "error",
    message: errorMessage(error),
  });
  return {
    success: false,
    error: errorMessage(error),
  };
};

export const getCoerces = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setCourseLoading(true));
    const res = (await client.get("courses")).data;
    dispatch(setCourseLoading(false));
    dispatch(setCourses(res.data));
    return {
      success: true,
    };
  } catch (error) {
    return { ...handleError(error, dispatch) };
  }
};
export const addCourse =
  (data: AddCourseForm) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setCourseLoading(true));
      const res = (await client.post("courses", data)).data;
      dispatch(setCourseLoading(false));
      dispatch(getCoerces());
      return {
        success: true,
      };
    } catch (error) {
      return { ...handleError(error, dispatch) };
    }
  };

export const getSingleCourse = async (id: string) => {
  try {
    const res = (await client.get("courses/" + id)).data;
    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    showMessage({
      variant: "error",
      message: errorMessage(error),
    });
    return {
      success: false,
    };
  }
};
