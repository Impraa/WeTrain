import { RegisterBulletPoint } from "./RegisterBulletPoint";
import "./RegisterBulletPoints.scss";

const bulletPoiintTexts = [
  {
    title: "Reliable and Efficient Workouts",
    text: "Our gym offers a consistent and dependable environment for your fitness journey. Our state-of-the-art equipment is meticulously maintained, ensuring you have a seamless workout experience every time.",
  },
  {
    title: "Swift Results, No Waiting",
    text: "Say goodbye to long queues and wait times. At our gym, we value your time as much as you do. With ample equipment and efficient layout, you can swiftly move through your workout routine, making the most out of your time spent at the gym.",
  },
  {
    title: "Prompt Support and Services",
    text: "Need assistance or have questions? Our knowledgeable staff is always on hand to provide swift support and guidance. From personalized training advice to quick adjustments on equipment, we're here to make your gym sessions productive and hassle-free.",
  },
];

export const RegisterBulletPoints = () => {
  return (
    <div className="register-bullet-points">
      {bulletPoiintTexts.map((item, index) => {
        return (
          <RegisterBulletPoint
            key={index}
            text={item.text}
            title={item.title}
          />
        );
      })}
    </div>
  );
};
