import { useNavigate } from "react-router-dom";
import IconCloseCircle from "../../assets/Icons/IconCircleX";
import CustomButton from "../custom-button/CustomButton";
import "./MembershipExpired.scss";
import { useSelector } from "react-redux";
import { selectExpiryDate } from "../../redux/membership/MembershipSelector";

const MembershipExpired = () => {
  const navigate = useNavigate();
  const expiry = useSelector(selectExpiryDate)!;

  return (
    <div className="membership-expired">
      <div className="title-icon">
        <IconCloseCircle />
        <h2>Your membership has expired</h2>
      </div>
      <h3>
        Membership expired: {expiry.getDate()}.{expiry.getMonth() + 1}.
        {expiry.getFullYear()}
      </h3>
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
