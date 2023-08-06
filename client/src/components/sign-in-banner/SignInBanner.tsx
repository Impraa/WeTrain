import "./SignInBanner.scss";
import video from "../../assets/SignInBanner.mp4";
function SignInBanner() {
  return (
    <section className="sign-in-banner">
      <video className="video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="text">
        <h2>Not already a member?</h2>
        <h3>What are you waiting for join today!</h3>
        <button>Join now</button>
      </div>
    </section>
  );
}

export default SignInBanner;
