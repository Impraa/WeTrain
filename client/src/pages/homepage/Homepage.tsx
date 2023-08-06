import Hero from "../../components/hero/Hero";
import SignInBanner from "../../components/sign-in-banner/SignInBanner";
import "./Homepage.scss";
function Homepage() {
  return (
    <div className="homepage">
      <div>
        <Hero />
        <SignInBanner />
      </div>
    </div>
  );
}

export default Homepage;
