import { RootState } from "../store";

export const selectNotification = (state: RootState) =>
  state.notification.notification;

export const selectNotificationIsLoading = (state: RootState) =>
  state.notification.isLoading;

export const selectNotificationError = (state: RootState) =>
  state.notification.error;

export const selectNotifications = (state: RootState) =>
  state.notification.notifications;

export const selectNotificationsIsLoading = (state: RootState) =>
  state.notification.notificationsIsLoading;

export const selectNotificationsError = (state: RootState) =>
  state.notification.notificationsError;
