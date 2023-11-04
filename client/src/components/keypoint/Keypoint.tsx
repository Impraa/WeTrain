import { Keypoint as KeypointInter } from "../../utils/Interfaces/components/PropsInterfaces";
import "./Keypoint.scss";

const Keypoint: React.FC<KeypointInter> = ({ text, title, svg: Svg }) => {
  return (
    <div className="keypoint">
      <Svg /> <h4>{title}</h4> <p>{text}</p>
    </div>
  );
};

export default Keypoint;
