import { AnyAction } from "@reduxjs/toolkit";
import { UserActionType } from "./UserTypes";
import { UserInitalState } from "../../utils/Interfaces/redux/AttributeInterfaces";

const INITAL_STATE: UserInitalState = {
  user: null,
  isLoading: false,
  error: null,
  foundUser: null,
  foundUserIsLoading: false,
  foundUserError: null,
  newPasswordIsLoading: false,
  newPasswordError: null,
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
    case UserActionType.START_CHANGE_PASSWORD:
      return {
        ...state,
        newPasswordIsLoading: true,
      };
    case UserActionType.ERROR_CHANGE_PASSWORD:
      return {
        ...state,
        newPasswordError: payload,
        newPasswordIsLoading: false,
      };
    case UserActionType.SUCCESS_CHANGE_PASSWORD:
      return {
        ...state,
        newPasswordIsLoading: false,
      };
    default:
      return state;
  }
};
