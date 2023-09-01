import { Dispatch } from "@reduxjs/toolkit";
import { User, UserRegister } from "../../../../types/User";
import { createAction } from "../GenericAction";
import { UserActionType } from "./UserTypes";
import { registerUser } from "../../services/User";

export const setUserStart = () => {
  return createAction(UserActionType.SET_USER_START);
};

export const setUserFailed = (error: string) => {
  return createAction(UserActionType.SET_USER_FALIED, error);
};

export const setUserSuccess = (user: User) => {
  return createAction(UserActionType.SET_USER_SUCCESS, user);
};

export const setUserAsync = async (
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
