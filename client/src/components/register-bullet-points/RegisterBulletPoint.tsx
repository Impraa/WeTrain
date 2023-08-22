import Tick from "../../assets/Tick";
import "./RegisterBulletPoint.scss";

export const RegisterBulletPoint: React.FC<{ title: string; text: string }> = ({
  title,
  text,
}) => {
  return (
    <div className="register-bullet-point">
      <Tick />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
