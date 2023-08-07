import { FaLocationDot } from "react-icons/fa6";
import "./LogoAndAddress.scss";

function LogoAndAddress() {
  return (
    <div className="logo-and-address">
      <h1>We Train logo</h1>

      <div className="address">
        <FaLocationDot className="icon" />
        <p>Ulica Božidara Magovca 157</p>
      </div>
    </div>
  );
}

export default LogoAndAddress;
