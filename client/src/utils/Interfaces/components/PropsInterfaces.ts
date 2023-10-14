import { ReactNode } from "react";
import { User } from "../../../../../types/User";
import { Notification } from "../../../../../types/Notification";

export interface NavItemProps {
  path: string;
  children: ReactNode;
  onClick: () => void;
}

export interface CustomButton {
  children: ReactNode;
  onClick: () => void;
  type: string;
  disable?: boolean;
}

export interface UserNavBox {
  user: User;
}

export interface UserInfo {
  user: User;
}

export interface CheckAuth {
  children: ReactNode;
}

export interface BasicInfo {
  user: User;
}

export interface Notifcation {
  notification: Notification;
}
