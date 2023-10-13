import { NotificationInitalState } from "../../utils/Interfaces/redux/AttributeInterfaces";
import { AnyAction } from "@reduxjs/toolkit";
import { NotificationActionType } from "./NotificationTypes";

const INITAL_STATE: NotificationInitalState = {
  notification: null,
  notifications: [],
  isLoading: false,
  notificationsIsLoading: false,
  error: null,
  notificationsError: null,
};

export const notificationReducer = (
  state = INITAL_STATE,
  action: AnyAction
) => {
  const { type, payload } = action;

  switch (type) {
    case NotificationActionType.START_SET_NOTIFICATION:
      return {
        ...state,
        isLoading: false,
      };
    case NotificationActionType.SUCCESS_SET_NOTIFICATION:
      return {
        ...state,
        notification: payload,
      };
    case NotificationActionType.ERROR_SET_NOTIFICATION:
      return {
        ...state,
        error: payload,
      };
    case NotificationActionType.START_SET_NOTIFICATIONS:
      return {
        ...state,
        notificationsIsLoading: false,
      };
    case NotificationActionType.SUCCESS_SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: payload,
      };
    case NotificationActionType.ERROR_SET_NOTIFICATIONS:
      return {
        ...state,
        notificationsError: payload,
      };
    default:
      return state;
  }
};
