import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import "./SocialMedia.scss";

function SocialMedia() {
  return (
    <div className="socialMedia">
      <h3>Check us out on social media!</h3>
      <FaFacebookSquare />
      <FiInstagram />
    </div>
  );
}

export default SocialMedia;
