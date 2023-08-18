import { ReactNode } from "react";
import "./CustomButton.scss";

const CustomButton: React.FC<{
  children: ReactNode;
  onClick: () => void;
  type: string;
}> = ({ children, onClick, type }) => {
  return (
    <button
      className={type === "normal" ? "normal" : "inverted"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
