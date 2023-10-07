import { Dispatch } from "@reduxjs/toolkit";
import {
  User,
  UserChangeBasicInfo,
  UserChangePassword,
  UserLogin,
  UserRegister,
} from "../../../../types/User";
import { createAction } from "../GenericAction";
import { UserActionType } from "./UserTypes";
import Jwt from "jsonwebtoken";
import {
  getSingleUser,
  loginUser,
  registerUser,
  resetUserPassword,
  sendUserResetPassword,
  updateUserBasicInfo,
  updateUserPassword,
  uploadUserProfilePicture,
  verifyUser,
} from "../../services/User";

export const setUserStart = () => {
  return createAction(UserActionType.SET_USER_START);
};

export const setUserFailed = (error: string | null) => {
  return createAction(UserActionType.SET_USER_FALIED, error);
};

export const setUserSuccess = (user: User | null) => {
  return createAction(UserActionType.SET_USER_SUCCESS, user);
};

export const setFoundUserStart = () => {
  return createAction(UserActionType.SET_FOUND_USER_START);
};

export const setFoundUserFailed = (error: string | null) => {
  return createAction(UserActionType.SET_FOUND_USER_FALIED, error);
};

export const setFoundUserSuccess = (user: User | null) => {
  return createAction(UserActionType.SET_FOUND_USER_SUCCESS, user);
};

export const logoutUser = (user: User) => {
  return createAction(UserActionType.LOGOUT_USER, user);
};

export const startResetPassword = () => {
  return createAction(UserActionType.START_CHANGE_PASSWORD);
};

export const successResetPassword = () => {
  return createAction(UserActionType.SUCCESS_CHANGE_PASSWORD);
};

export const errorResetPassword = (error: string) => {
  return createAction(UserActionType.ERROR_CHANGE_PASSWORD, error);
};

export const registerUserAsync = async (
  dispatch: Dispatch,
  formData: UserRegister
) => {
  dispatch(setUserStart());

  const userData = await registerUser(formData);

  if (userData.data) {
    try {
      const user = Jwt.decode(userData.data) as User;
      dispatch(setUserSuccess(user as User));
    } catch (error) {
      dispatch(setUserFailed("Invalid token " + error));
    }
  } else {
    window.scrollTo(0, 0);
    dispatch(setUserFailed(userData.statusText));
  }
};

export const loginUserAsync = async (
  dispatch: Dispatch,
  formData: UserLogin
) => {
  dispatch(setUserStart());
  const userData = await loginUser(formData);

  if (userData.data) {
    try {
      const user = Jwt.decode(userData.data) as User;
      dispatch(setUserSuccess(user as User));
    } catch (error) {
      dispatch(setUserFailed("Invalid token " + error));
    }
  } else {
    window.scrollTo(0, 0);
    dispatch(setUserFailed(userData.statusText));
  }
};

export const verifyUserAsync = async (dispatch: Dispatch, id: string) => {
  dispatch(setUserStart());
  const userData = await verifyUser(id);
  if (userData.data) {
    try {
      const user = Jwt.decode(userData.data) as User;
      dispatch(setUserSuccess(user as User));
    } catch (error) {
      dispatch(setUserFailed("Cannot verify " + error));
    }
  } else {
    window.scrollTo(0, 0);
    dispatch(setUserFailed(userData.statusText));
  }
};

export const getSingleUserAsync = async (dispatch: Dispatch, id: string) => {
  dispatch(setFoundUserStart());
  try {
    const userData = await getSingleUser(id);

    if (userData.status === 200) {
      const user = Jwt.decode(userData.data) as User;
      dispatch(setFoundUserSuccess(user));
    }
  } catch (error) {
    dispatch(setFoundUserFailed("Cannot find user " + error));
  }
};

export const changeUserProfilePicAsync = async (
  dispatch: Dispatch,
  id: string,
  file: File
) => {
  dispatch(setUserStart());

  try {
    const userData = await uploadUserProfilePicture(id, file);

    if (userData.status === 200) {
      const user = Jwt.decode(userData.data) as User;
      dispatch(setUserSuccess(user));
    }
  } catch (error) {
    dispatch(setUserFailed("Cannot find user " + error));
  }
};

export const updateUserBasicInfoAsync = async (
  dispatch: Dispatch,
  formData: UserChangeBasicInfo
) => {
  dispatch(setUserStart());
  try {
    const userData = await updateUserBasicInfo(formData);

    if (userData.status === 200) {
      const user = Jwt.decode(userData.data) as User;
      dispatch(setUserSuccess(user));
    }
  } catch (error) {
    dispatch(setUserFailed("Could not update user's basic info " + error));
  }
};

export const updateUserPasswordAsync = async (
  dispatch: Dispatch,
  formData: UserChangePassword
) => {
  dispatch(setUserStart());
  try {
    const userData = await updateUserPassword(formData);

    if (userData.status === 200) {
      const user = Jwt.decode(userData.data) as User;
      dispatch(setUserSuccess(user));
    }
  } catch (error) {
    dispatch(setUserFailed("Could not update user's password " + error));
  }
};

export const sendResetUserPasswordAsync = async (
  dispatch: Dispatch,
  email: string
) => {
  dispatch(startResetPassword());

  try {
    const response = await sendUserResetPassword(email);

    if (response.status === 200) {
      dispatch(successResetPassword());
      return "/" as string;
    }
  } catch (error) {
    dispatch(
      errorResetPassword(
        "Unable to send notification for password reset" + error
      )
    );
  }
};

export const resetUserPasswordAsync = async (
  dispatch: Dispatch,
  newPassword: string,
  id: number
) => {
  dispatch(setUserStart());

  try {
    const response = await resetUserPassword(newPassword, id);

    if (response.status === 200) {
      const user = Jwt.decode(response.data) as User;
      dispatch(setUserSuccess(user));
      return "/" as string;
    }
  } catch (error) {
    dispatch(setUserFailed("Unable to reset password" + error));
  }
};
