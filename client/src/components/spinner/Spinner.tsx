import Lottie from "react-lottie";
import animationData from "../../assets/LoadingAnimation.json";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner">
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
  );
};

export default Spinner;
