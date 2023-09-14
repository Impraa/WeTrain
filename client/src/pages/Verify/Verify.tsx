import { Link, useParams } from "react-router-dom";
import "./Verify.scss";
import Lottie from "react-lottie";
import animationData from "../../assets/LoadingAnimation.json";
import verifySuccess from "../../assets/VerifySuccess.json";
import verifyError from "../../assets/VerifyError.json";
import { useEffect } from "react";
import { verifyUserAsync } from "../../redux/user/UserAction";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectUserIsLoading,
} from "../../redux/user/UserSelector";

export const Verify = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const user = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectUserIsLoading);

  useEffect(() => {
    verifyUserAsync(dispatch, id as string);
  }, []);

  return (
    <div className="verify">
      {isLoading ? (
        <>
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
          <h2>Trying to verify user keep tight</h2>
        </>
      ) : (
        <>
          {user ? (
            <>
              {" "}
              <div className="animation-container">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: verifySuccess,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <h2>Congratulations! You have been verified successfully!</h2>
              <Link className="link" to={"/"}>
                Return to the homepage
              </Link>
            </>
          ) : (
            <>
              {" "}
              <div className="sad-animation">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: verifyError,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <h2>
                Oh no! Something went wrong, are you sure you are not already
                verified?
              </h2>
              <Link to={"/"} className="link">
                Return to the homepage
              </Link>
            </>
          )}
        </>
      )}
    </div>
  );
};
