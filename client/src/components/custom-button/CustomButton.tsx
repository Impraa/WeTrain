import "./CustomButton.scss";
import { CustomButton as CustomButtonInter } from "../../utils/Interfaces/components/PropsInterfaces";
import Lottie from "react-lottie";
import animationData from "../../assets/LoadingAnimation.json";

const CustomButton: React.FC<CustomButtonInter> = ({
  children,
  onClick,
  type,
  disable = false,
}) => {
  return (
    <button
      className={
        !disable ? "disable" : type === "normal" ? "normal" : "inverted"
      }
      onClick={onClick}
      disabled={disable}
    >
      {!disable ? (
        <div className="animation-container">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
