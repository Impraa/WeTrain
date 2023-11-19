import { Notification } from "../../../../../types/Notification";
import { User } from "../../../../../types/User";

export interface UserInitalState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  foundUser: User | null;
  foundUserIsLoading: boolean;
  foundUserError: string | null;
  newPasswordIsLoading: boolean;
  newPasswordError: string | null;
}

export interface NotificationInitalState {
  notification: Notification | null;
  isLoading: boolean;
  error: string | null;
  notifications: Notification[];
  notificationsIsLoading: boolean;
  notificationsError: string | null;
}

export interface MembershipInitalState {
  expiryDate: Date | null;
  isLoading: boolean;
  error: string | null;
}
