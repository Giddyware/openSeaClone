import Cookies from "js-cookie";
import {
  authStart,
  authSuccess,
  authFailure,
  logout,
  getUserDetailsStart,
  getUserDetailsSuccess,
  getEmailVerified,
  changePasswordStart,
  changePasswordFailure,
} from "./authSlice";
import {
  createEmailTokenAPI,
  forgotPasswordAPI,
  getNftsAPI,
  getUserDetailsRequestAPI,
  loginUserAPI,
  logoutUserAPI,
  registerUserAPI,
  updatePasswordAPI,
  updateProfilePicAPI,
} from "./authApi";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Register user action
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { dispatch }) => {
    dispatch(authStart());
    try {
      const response = await registerUserAPI(userData);
      // console.log(response, "response==");
      if (response.status === "success") {
        dispatch(getEmailVerified(response.data.user.emailVerified));
        // console.log(response.data.user.emailVerified, "isEmailVerified==");
        localStorage.setItem(
          "isEmailVerified",
          response.data.user.emailVerified
        ); //* Store the emailVerified in the localStorage
        Cookies.set("authToken", response.token, { expires: 0.625 }); // Store the authentication token in a cookie
        dispatch(authSuccess(response));
        toast.success("Registered Successful");
        dispatch(createEmailToken());
        <Navigate to="/verify_email" />;
      }
    } catch (error) {
      dispatch(authFailure(error));
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { dispatch }) => {
    dispatch(authStart());
    try {
      const response = await loginUserAPI(userData);
      console.log(response, "response");

      if (response.status === "success") {
        dispatch(getEmailVerified(response.data.user.emailVerified));
        // console.log(response.data.user.emailVerified, "isEmailVerified==");
        localStorage.setItem(
          "isEmailVerified",
          response.data.user.emailVerified
        ); //* Store the emailVerified in the localStorage
        Cookies.set("authToken", response.token, { expires: 0.625 }); // Store the authentication token in a cookie
        dispatch(authSuccess(response.data));

        <Navigate to="/dashboard" />;
        toast.success("Login Successful");
      }
    } catch (error) {
      dispatch(authFailure(error));
      toast.error("Invalid credentials");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { dispatch }) => {
    try {
      await logoutUserAPI();
      localStorage.removeItem("isEmailVerified");
      Cookies.remove("authToken");
      dispatch(logout());
    } catch (error) {
      dispatch(authFailure(error));
      toast.error("Something went wrong");
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { dispatch }) => {
    try {
      const response = await forgotPasswordAPI(email);
      if (response.status === "success") {
        toast.success("Token sent to email!");
      }
    } catch (error) {
      dispatch(authFailure(error));
      toast.error("Invalid credentials");
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "auth/getUserDetails",
  async (_, { dispatch }) => {
    try {
      dispatch(getUserDetailsStart());
      const response = await getUserDetailsRequestAPI();

      dispatch(getUserDetailsSuccess(response.data));
    } catch (error) {
      dispatch(getUserDetailsFailure(error.message));
      toast.error("Invalid credentials");
    }
  }
);

export const createEmailToken = createAsyncThunk(
  "auth/createEmailToken",
  async (_, { dispatch }) => {
    try {
      const response = await createEmailTokenAPI();

      if (response.status === "success") {
        toast.success(
          "Congratulations🎉, You can now check you email to confirm!",
          {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
          }
        );
      }
    } catch (error) {
      toast.error("Something went wrong😢");
    }
  }
);

export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async (data, { dispatch }) => {
    dispatch(changePasswordStart(data));
    try {
      const response = await updatePasswordAPI(data);
      console.log(response, "response");

      if (response.status === "success") {
        toast.success(
          "Congratulations🎉, You have successfully change your password",
          {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
          }
        );

      dispatch(logoutUser)
      }
    } catch (error) {
      dispatch(changePasswordFailure(error));
      toast.error("Invalid credentials, please check current password");
    }
  }
);

export const updateProfilePic = createAsyncThunk(
  "auth/updateProfilePic",
  async (data, { dispatch }) => {
    dispatch(changePasswordStart);
    try {
      console.log(data, "data");
      const response = await updateProfilePicAPI(data);
      console.log(response, "response");

      if (response.status === "success") {
        toast.success(
          "Congratulations🎉, You have changed your Profile picture!",
          {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
          }
        );
      }
    } catch (error) {
      // dispatch(authFailure(error));
      toast.error("Something went wrong😢");
    }
  }
);
