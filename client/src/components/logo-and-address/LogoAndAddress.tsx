import { FaLocationDot } from "react-icons/fa6";
import "./LogoAndAddress.scss";
import { ReactComponent as WeTrainLogo } from "../../assets/WeTrainLogoSite.svg";

function LogoAndAddress() {
  return (
    <div className="logo-and-address">
      <h2>
        <WeTrainLogo />
      </h2>
      <div className="address">
        <FaLocationDot className="icon" />
        <p>Ulica Božidara Magovca 157</p>
      </div>
    </div>
  );
}

export default LogoAndAddress;
