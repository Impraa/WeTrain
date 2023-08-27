import { Dispatch } from "@reduxjs/toolkit";
import { User } from "../../../../types/User";
import { createAction } from "../GenericAction";
import { UserActionType } from "./UserTypes";

export const setUserStart = () => {
  return createAction(UserActionType.SET_USER_START);
};

export const setUserFailed = (error: Error) => {
  return createAction(UserActionType.SET_USER_FALIED, error);
};

export const setUserSuccess = (user: User) => {
  createAction(UserActionType.SET_USER_SUCCESS, user);
};

export const setUserAsync = async (dispatch: Dispatch) => {
  dispatch(setUserStart());
  //User fetch function
};
