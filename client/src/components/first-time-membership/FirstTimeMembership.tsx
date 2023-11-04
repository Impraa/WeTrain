import IconFoodApple from "../../assets/Icons/IconApple";
import IconDumbbell from "../../assets/Icons/IconDumbbell";
import IconWhistle from "../../assets/Icons/IconWhistle";
import CustomButton from "../custom-button/CustomButton";
import Keypoint from "../keypoint/Keypoint";
import "./FirstTimeMembership.scss";

const keypoints = [
  {
    title: "Personalized Workout Plans",
    svg: IconDumbbell,
    text: "Our expert trainers will create a fitness program tailored specifically to your goals and fitness level, ensuring you get the most out of every workout.",
  },
  {
    title: "Nutrition Guidance",
    svg: IconFoodApple,
    text: "Fuel your workouts and speed up recovery with our expert nutrition advice. We'll help you understand what to eat, when to eat it, and why it's important.",
  },
  {
    title: "Expert Coaches",
    svg: IconWhistle,
    text: "Learn from the best in the industry. Our coaches are here to guide you, motivate you, and make sure you're progressing safely and effectively towards your fitness goals.",
  },
];

function FirstTimeMembership() {
  return (
    <div className="first-time-membership">
      <h2>Don&#39;t have a We Train membership yet?</h2>
      <h3>Let&#39;s change that today!</h3>
      <div className="keypoint-container">
        {keypoints.map((keypoint) => (
          <Keypoint
            title={keypoint.title}
            text={keypoint.text}
            svg={keypoint.svg}
          />
        ))}
      </div>
      <CustomButton onClick={() => {}} type="normal">
        Join now
      </CustomButton>
    </div>
  );
}

export default FirstTimeMembership;
