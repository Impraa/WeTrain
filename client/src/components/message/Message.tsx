import { ReactNode } from "react";
import "./Message.scss";

export const Message: React.FC<{
  type: "success" | "error";
  children: ReactNode;
}> = ({ type, children }) => {
  return <div className={type}>{children}</div>;
};
