import { Dispatch } from "@reduxjs/toolkit";
import { User } from "../../../../types/User";
import { createAction } from "../GenericAction";
import { UserActionType } from "./UserTypes";
import { AxiosResponse } from "axios";

export const setUserStart = () => {
  return createAction(UserActionType.SET_USER_START);
};

export const setUserFailed = (error: Error) => {
  return createAction(UserActionType.SET_USER_FALIED, error);
};

export const setUserSuccess = (user: User) => {
  createAction(UserActionType.SET_USER_SUCCESS, user);
};

export const setUserAsync = async (
  dispatch: Dispatch,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: Promise<AxiosResponse<any, any>>
) => {
  dispatch(setUserStart());
  //User fetch function
  user;
};
