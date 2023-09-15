import { Dispatch } from "@reduxjs/toolkit";
import { User, UserLogin, UserRegister } from "../../../../types/User";
import { createAction } from "../GenericAction";
import { UserActionType } from "./UserTypes";
import Jwt from "jsonwebtoken";
import {
  getSingleUser,
  loginUser,
  registerUser,
  verifyUser,
} from "../../services/User";

export const setUserStart = () => {
  return createAction(UserActionType.SET_USER_START);
};

export const setUserFailed = (error: string) => {
  return createAction(UserActionType.SET_USER_FALIED, error);
};

export const setUserSuccess = (user: User) => {
  return createAction(UserActionType.SET_USER_SUCCESS, user);
};

export const setFoundUserStart = () => {
  return createAction(UserActionType.SET_FOUND_USER_START);
};

export const setFoundUserFailed = (error: string) => {
  return createAction(UserActionType.SET_FOUND_USER_FALIED, error);
};

export const setFoundUserSuccess = (user: User) => {
  return createAction(UserActionType.SET_FOUND_USER_SUCCESS, user);
};

export const logoutUser = (user: User) => {
  return createAction(UserActionType.LOGOUT_USER, user);
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
      dispatch(setFoundUserSuccess(userData.data));
    }
  } catch (error) {
    dispatch(setFoundUserFailed("Cannot find user " + error));
  }
};
