import { BasicInfo as BasicInfoInter } from "../../utils/Interfaces/components/PropsInterfaces";
import CustomButton from "../custom-button/CustomButton";
import "./BasicInfo.scss";

export const BasicInfo: React.FC<BasicInfoInter> = ({ user }) => {
  const parsedBirthday = new Date(user.birthday);
  const formattedBirthday = parsedBirthday.toLocaleDateString();

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
      <div className="email">
        <label>Email</label>
        <input type="text" value={user.email} />
      </div>
      <div className="birth-date">
        <label>Birth date</label>
        <input type="string" disabled value={formattedBirthday} />
      </div>
      <div className="gender">
        <label>Gender</label>
        <input
          type="string"
          disabled
          value={user.gender[0].toUpperCase() + user.gender.slice(1)}
        />
      </div>
      <CustomButton onClick={() => {}} type="normal">
        Save changes
      </CustomButton>
    </div>
  );
};
