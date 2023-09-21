import { BasicInfo as BasicInfoInter } from "../../utils/Interfaces/components/PropsInterfaces";
import "./BasicInfo.scss";

export const BasicInfo: React.FC<BasicInfoInter> = ({ user }) => {
  return (
    <div className="basic-info">
      <div className="first-name">
        <label>First name</label>
        <input type="text" value={user.fName} />
      </div>
      <div className="last-name">
        <label>Last name</label>
        <input type="text" value={user.lName} />
      </div>
    </div>
  );
};
