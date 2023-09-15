import { AnyAction } from "@reduxjs/toolkit";
import { UserActionType } from "./UserTypes";

const INITAL_STATE = {
  user: null,
  isLoading: false,
  error: null,
  foundUser: null,
  foundUserIsLoading: false,
  foundUserError: null,
};

export const userReducer = (state = INITAL_STATE, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionType.SET_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case UserActionType.SET_USER_FALIED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case UserActionType.SET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case UserActionType.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    case UserActionType.SET_FOUND_USER_START:
      return {
        ...state,
        foundUserIsLoading: true,
      };
    case UserActionType.SET_FOUND_USER_SUCCESS:
      return {
        ...state,
        foundUser: payload,
      };
    case UserActionType.SET_FOUND_USER_FALIED:
      return {
        ...state,
        selectFoundUserError: payload,
      };
    default:
      return state;
  }
};
