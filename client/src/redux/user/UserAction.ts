import { Dispatch } from "@reduxjs/toolkit";
import { User, UserLogin, UserRegister } from "../../../../types/User";
import { createAction } from "../GenericAction";
import { UserActionType } from "./UserTypes";
import { loginUser, registerUser } from "../../services/User";

export const setUserStart = () => {
  return createAction(UserActionType.SET_USER_START);
};

export const setUserFailed = (error: string) => {
  return createAction(UserActionType.SET_USER_FALIED, error);
};

export const setUserSuccess = (user: User) => {
  return createAction(UserActionType.SET_USER_SUCCESS, user);
};

export const logoutUser = (user: User) => {
  return createAction(UserActionType.LOGOUT_USER, user);
};

export const registerUserAsync = async (
  dispatch: Dispatch,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: UserRegister
) => {
  dispatch(setUserStart());

  const userData = await registerUser(formData);

  if (userData.data) {
    dispatch(setUserSuccess(userData.data as User));
  } else {
    window.scrollTo(0, 0);
    dispatch(setUserFailed(userData.statusText));
  }
};

export const loginUserAsync = async (
  dispatch: Dispatch,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: UserLogin
) => {
  dispatch(setUserStart());

  const userData = await loginUser(formData);

  if (userData.data) {
    dispatch(setUserSuccess(userData.data as User));
  } else {
    window.scrollTo(0, 0);
    dispatch(setUserFailed(userData.statusText));
  }
};
