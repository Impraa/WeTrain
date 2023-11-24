import { useNavigate } from "react-router-dom";
import IconCheckmark from "../../assets/Icons/IconCheckmark";
import CustomButton from "../custom-button/CustomButton";
import "./MembershipActive.scss";
import { useSelector } from "react-redux";
import { selectExpiryDate } from "../../redux/membership/MembershipSelector";

const MembershipActive = () => {
  const navigate = useNavigate();
  const expiry = useSelector(selectExpiryDate)!;

  return (
    <div className="membership-active">
      <div className="title-icon">
        <IconCheckmark />
        <h2>Membership is active</h2>
      </div>
      <h3>
        Membership is lasting until: {expiry.getDate()}.{expiry.getMonth() + 1}.
        {expiry.getFullYear()}
      </h3>
      <CustomButton
        type="normal"
        onClick={() => navigate("/choose-a-memebership")}
      >
        Prolong now
      </CustomButton>
    </div>
  );
};

export default MembershipActive;
