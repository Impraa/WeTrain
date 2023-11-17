import MembershipPlan from "../../components/membership-plan/MembershipPlan";
import { MembershipPlan as MembershipPlanInter } from "../../utils/Interfaces/components/PropsInterfaces";
import CustomButton from "../../components/custom-button/CustomButton";
import "./ChooseAMembership.scss";
import { useState, useEffect } from "react";
import { createPaymentIntentAsync } from "../../redux/user/UserAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const membershipPlans: MembershipPlanInter[] = [
  {
    label: "Basic",
    id: "basic",
    price: "9.99",
    description:
      "Our Basic Plan is perfect for those who are new to the gym or don’t require advanced features. Priced at just 9.99€, it offers access to essential gym equipment and facilities. Start your fitness journey with us today!",
  },
  {
    label: "Advanced",
    id: "advanced",
    price: "14.99",
    description:
      "The Advanced Plan, priced at €14.99, is designed for fitness enthusiasts who are looking for a little more from their gym experience. It includes access to advanced equipment and classes, helping you take your fitness to the next level.",
  },
  {
    label: "Premium",
    id: "premium",
    price: "19.99",
    description:
      "Our Premium Plan is the ultimate choice for those who demand the best. At €19.99, it provides unrestricted access to all our facilities, premium equipment, and exclusive classes. Experience the best we have to offer and achieve your fitness goals in style.",
  },
];

const ChooseAMembership = () => {
  const [planPrice, setPlanPrice] = useState<string>("");
  const dispatch = useDispatch();
  const redirect = useNavigate();

  useEffect(() => {
    if (window.sessionStorage.getItem("client_secret")) {
      redirect("/payment");
    }
  }, [window.sessionStorage]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createPaymentIntentAsync(dispatch, planPrice);
  };

  return (
    <div className="choose-a-membership">
      <h2>Choose a membership plan</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        {membershipPlans.map((item) => (
          <MembershipPlan
            key={item.id}
            label={item.label}
            id={item.id}
            price={item.price}
            onClick={() => {
              setPlanPrice(item.price);
            }}
            description={item.description}
          />
        ))}
        <CustomButton buttonType="submit" type="normal" onClick={() => {}}>
          Pay now
        </CustomButton>
      </form>
    </div>
  );
};

export default ChooseAMembership;
