import MembershipPlan from "../../components/membership-plan/MembershipPlan";
import { MembershipPlan as MembershipPlanInter } from "../../utils/Interfaces/components/PropsInterfaces";
import CustomButton from "../../components/custom-button/CustomButton";

const membershipPlans: MembershipPlanInter[] = [
  { label: "Basic", id: "basic" },
  { label: "Advanced", id: "advanced" },
  { label: "Premium", id: "premium" },
];

const ChooseAMembership = () => {
  return (
    <div>
      <h2>Choose a membership plan</h2>
      <form action="">
        {membershipPlans.map((item) => (
          <MembershipPlan label={item.label} id={item.id} />
        ))}
      </form>
      <CustomButton buttonType="submit" type="normal" onClick={() => {}}>
        Pay now
      </CustomButton>
    </div>
  );
};

export default ChooseAMembership;
