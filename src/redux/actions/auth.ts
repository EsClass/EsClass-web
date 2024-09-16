import { auth, db } from "@/api/firebase";
import { Student, Supervisor } from "@/types/data-types";
import { errorMessage, showMessage } from "@/utils/utility";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { setAuthData, setAuthLoading, setLoggedIn } from "../slices/authSlices";
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
  (data: Supervisor | Student) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setAuthLoading(true));
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password!
      );
      await setDoc(doc(db, "user", user.uid), data, { merge: true });
      dispatch(setAuthLoading(false));
      dispatch(setAuthData(data));
      dispatch(setLoggedIn(true));

      return {
        success: true,
      };
    } catch (error) {
      return { ...handleError(error, dispatch) };
    }
  };

export const loginAdmin =
  (data: { email: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(setAuthLoading(true));
      const { user } = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const ref = doc(db, "users", user.uid);
      const res = await getDoc(ref);
      if (!res.exists()) throw new Error("User not found");
      const payload = {
        ...res.data(),
        emailVerified: user.emailVerified,
        _id: user.uid,
      };
      dispatch(setLoggedIn(true));
      dispatch(setAuthLoading(false));
      dispatch(setAuthData(payload));
      return {
        success: true,
        data: payload,
      };
    } catch (error) {
      return { ...handleError(error, dispatch) };
    }
  };
export const logout = () => async (dispatch: AppDispatch) => {
  await persistor.purge();
};
