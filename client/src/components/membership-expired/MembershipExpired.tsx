import { useNavigate } from "react-router-dom";
import IconCloseCircle from "../../assets/Icons/IconCircleX";
import CustomButton from "../custom-button/CustomButton";
import "./MembershipExpired.scss";

const MembershipExpired = () => {
  const navigate = useNavigate();

  return (
    <div className="membership-expired">
      <div className="title-icon">
        <IconCloseCircle />
        <h2>Your membership has expired</h2>
      </div>
      <CustomButton
        type="normal"
        onClick={() => navigate("/choose-a-memebership")}
      >
        Renew now
      </CustomButton>
    </div>
  );
};

export default MembershipExpired;
