import "./SignInBanner.scss";
import video from "../../assets/SignInBanner.mp4";
import { Link } from "react-router-dom";
function SignInBanner() {
  return (
    <section className="sign-in-banner">
      <video className="video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="text">
        <h2>Not already a member?</h2>
        <h3>What are you waiting for join today!</h3>
        <Link className="sign-in-button" to="/Login">
          Join now
        </Link>
      </div>
    </section>
  );
}

export default SignInBanner;
