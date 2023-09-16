import { ReactNode } from "react";
import { User } from "../../../../../types/User";

export interface NavItemProps {
  path: string;
  children: ReactNode;
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
