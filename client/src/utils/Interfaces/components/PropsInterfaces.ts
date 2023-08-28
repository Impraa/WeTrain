import { ReactNode } from "react";

export interface NavItemProps {
  path: string;
  children: ReactNode;
}

export interface CustomButton {
  children: ReactNode;
  onClick: () => void;
  type: string;
  disable: boolean;
}
