import Lottie from "react-lottie";
import animationData from "../../assets/Error404.json";
import "./Error404.scss";
export const Error404 = () => {
  return (
    <div className="error404">
      {" "}
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
      <h2>Error 404</h2>
      <h3>
        The traning session you are trying to find can't be found, maybe try
        again?
      </h3>
    </div>
  );
};
