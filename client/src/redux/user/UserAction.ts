import { Dispatch } from "@reduxjs/toolkit";
import { User } from "../../../../types/User";
import { createAction } from "../GenericAction";
import { UserActionType } from "./UserTypes";
import { AxiosResponse } from "axios";

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
  userData: AxiosResponse<any, any>
) => {
  console.log(userData);
  dispatch(setUserStart());

  if (userData.data) {
    dispatch(setUserSuccess(userData.data as User));
  } else {
    dispatch(setUserFailed(userData.statusText));
  }
};
