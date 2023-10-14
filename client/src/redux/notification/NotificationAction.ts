import { Dispatch } from "@reduxjs/toolkit";
import {
  CreateNotification,
  Notification,
} from "../../../../types/Notification";
import { createAction } from "../GenericAction";
import { NotificationActionType } from "./NotificationTypes";
import {
  createNotification,
  getAllNotifications,
} from "../../services/Notification";
import { User } from "../../../../types/User";

export const startSetNotification = () => {
  return createAction(NotificationActionType.START_SET_NOTIFICATION);
};

export const successSetNotification = (notification: Notification) => {
  return createAction(
    NotificationActionType.SUCCESS_SET_NOTIFICATION,
    notification
  );
};

export const errorSetNotificaton = (error: string) => {
  return createAction(NotificationActionType.ERROR_SET_NOTIFICATION, error);
};

export const startSetNotifications = () => {
  return createAction(NotificationActionType.START_SET_NOTIFICATIONS);
};

export const successSetNotifications = (notifications: Notification[]) => {
  return createAction(
    NotificationActionType.SUCCESS_SET_NOTIFICATIONS,
    notifications
  );
};

export const errorSetNotificatons = (error: string) => {
  return createAction(NotificationActionType.ERROR_SET_NOTIFICATIONS, error);
};

export const createNotificationAsync = async (
  dispatch: Dispatch,
  formData: CreateNotification,
  user: User,
  image: File
) => {
  dispatch(startSetNotification());
  try {
    const notification = await createNotification(formData, user, image);

    if (notification.data) {
      return dispatch(successSetNotification(notification.data));
    }

    dispatch(errorSetNotificaton("Could not create notification"));
  } catch (error) {
    dispatch(
      errorSetNotificaton(("Could not create notification " + error) as string)
    );
  }
};

export const getAllNotificationsAsync = async (dispatch: Dispatch) => {
  dispatch(startSetNotifications());
  try {
    const notifications = await getAllNotifications();
    console.log(notifications.data);

    if (notifications.data) {
      return dispatch(successSetNotifications(notifications.data));
    }

    dispatch(errorSetNotificatons("Could not recive notifications"));
  } catch (error) {
    dispatch(
      errorSetNotificatons(
        ("Could not recive notifications " + error) as string
      )
    );
  }
};
