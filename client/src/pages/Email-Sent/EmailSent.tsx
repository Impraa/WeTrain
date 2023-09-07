import { useSelector } from "react-redux";
import "./EmailSent.scss";
import { selectCurrentUser } from "../../redux/user/UserSelector";
import Lottie from "react-lottie";
import animationData from "../../assets/EmailSentAnimation.json";

const EmailSent = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <div className="email-sent">
      <div className="animation-container">
        <Lottie
          options={{
            loop: 0,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>
      <h2>
        Email has been sent to <span className="user-mail">{user.email}</span>,
      </h2>
      <h3>
        Please check your <span> inbox</span> and be sure to check{" "}
        <span>spam</span>!
      </h3>
    </div>
  );
};

export default EmailSent;
