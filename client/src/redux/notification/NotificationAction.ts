import { Dispatch } from "@reduxjs/toolkit";
import {
  CreateNotification,
  Notification,
} from "../../../../types/Notification";
import { createAction } from "../GenericAction";
import { NotificationActionType } from "./NotificationTypes";
import {
  createNotification,
  deleteNotification,
  getAllNotifications,
  getSingleNotification,
  updateNotification,
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

export const getSingleNotificationAsync = async (
  dispatch: Dispatch,
  id: string
) => {
  dispatch(startSetNotification());
  try {
    const notification = await getSingleNotification(id);

    if (notification.data) {
      return dispatch(successSetNotification(notification.data));
    }

    return dispatch(
      errorSetNotificaton(
        "Could not recive notification you are currently looking for, please try again"
      )
    );
  } catch (error) {
    dispatch(
      errorSetNotificaton(
        "Could not recive notification you are currently looking for, please try again or check for it's existance."
      )
    );
  }
};

export const updateNotificationAsync = async (
  dispatch: Dispatch,
  formData: CreateNotification,
  id: string,
  user: User,
  file: File
) => {
  dispatch(startSetNotification());
  try {
    const notification = await updateNotification(formData, id, user, file);

    if (notification.data) {
      return dispatch(successSetNotification(notification.data));
    }

    return dispatch(
      errorSetNotificaton("Could not update notification,please try again")
    );
  } catch (error) {
    dispatch(errorSetNotificaton("Could not update notification"));
  }
};

export const deleteNotifcationAsync = async (dispatch:Dispatch, id:string,user:User) => {
  dispatch(startSetNotification());
  try {
    const notification = await deleteNotification(id,user);

    if(notification.status === 204){
      return true;
    }

    dispatch(errorSetNotificaton("Notification could not be deleted, try again"));
    return false
  } catch (error) {
    dispatch(errorSetNotificaton("Notification could not be deleted"));
    return false;
  }
}