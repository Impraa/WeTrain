import "./CustomButton.scss";
import { CustomButton as CustomButtonInter } from "../../utils/Interfaces/components/PropsInterfaces";
import Spinner from "../spinner/Spinner";

const CustomButton: React.FC<CustomButtonInter> = ({
  children,
  onClick,
  type,
  buttonType = "button",
  disable = false,
}) => {
  return (
    <button
      className={
        disable
          ? "disable"
          : type === "normal"
          ? "normal"
          : type === "inverted"
          ? "inverted"
          : "nav-button"
      }
      type={buttonType}
      onClick={onClick}
      disabled={disable}
    >
      {disable ? <Spinner /> : children}
    </button>
  );
};

export default CustomButton;
