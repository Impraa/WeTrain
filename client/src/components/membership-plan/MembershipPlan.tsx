import React from "react";
import { MembershipPlan as MembershipPlanInter } from "../../utils/Interfaces/components/PropsInterfaces";

const MembershipPlan: React.FC<MembershipPlanInter> = ({ label, id }) => {
  return (
    <div className="membership-plan">
      <label>{label} plan</label>
      <input type="radio" name="membership-plan" id={id} value={id} />
    </div>
  );
};

export default MembershipPlan;
