import React from "react";
import { MembershipPlan as MembershipPlanInter } from "../../utils/Interfaces/components/PropsInterfaces";
import "./MembershipPlan.scss";

const MembershipPlan: React.FC<MembershipPlanInter> = ({
  label,
  id,
  price,
  description,
  onClick = () => {},
}) => {
  return (
    <div className="membership-plan">
      <div onClick={onClick} className="radio-button">
        <label>{label} plan</label>
        <input type="radio" name="membership-plan" id={id} value={id} />
      </div>
      <div className="text">
        <h3>
          Price: <span className="price-tag">{price} &euro;</span>{" "}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MembershipPlan;
